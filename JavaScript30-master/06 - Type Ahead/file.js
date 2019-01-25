const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
.then(rawObj => rawObj.json())
.then(data => cities.push(...data))

function findMatches(wordsToMatch, cities) {
    return cities.filter(place => {
        // find if the city or state was searched
        const regex = new RegExp(wordsToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numbersWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches() {
    const matchArr = findMatches(this.value, cities);
    const display = matchArr.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population"> ${numbersWithCommas(place.population)} </span>
        </li>
    `}).join('');

    suggestions.innerHTML = display;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);