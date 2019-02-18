 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
      // Array.prototype.filter() DONE
      // 1. Filter the list of inventors for those who were born in the 1500's
      //let inventors1500 = inventors.filter(obj => obj.year > 1499 && obj.year < 1600)
      //console.log(inventors1500)
  
      // Array.prototype.map() DONE
      // 2. Give us an array of the inventors' first and last names
      //let fullName = inventors.map(obj => `${obj.first} ${obj.last}`)
      //console.log(fullName)
  
      // Array.prototype.sort() DONE
      // 3. Sort the inventors by birthdate, oldest to youngest
      //let sorBirthDate = inventors.sort((a,b) => a.year - b.year)
      //console.table(sorBirthDate);
  
      // Array.prototype.reduce() DONE
      // 4. How many years did all the inventors live?
      // let totalYears = inventors.reduce((total, inventor) => {
      //   return total + (inventor.passed - inventor.year)
      // }, 0)
      //console.log(`Total years lived: ${totalYears}`)
  
      // 5. Sort the inventors by years lived DONE
      // let yearsLived = inventors.sort(function (a,b) {
      //   const lastInventor = a.passed - a.year;
      //   const nextInventor = b.passed - b.year;
      //   return (lastInventor) > nextInventor ? -1 : 1;
      // });

      // console.log(yearsLived)

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // copy and paste in dev tools in the above link
      // const category = document.querySelector('.mw-category');
      // const links  = Array.from(category.querySelectorAll('a'));
      // const de = links
      //                 .map(link => link.textContent)
      //                 .filter(streetName => streetName.includes('de'))
      // console.log(de)


  
      // 7. sort Exercise DONE
      // Sort the inventors and then the people alphabetically by last name
      // Inventors by last name
      //  let lastNameSort = inventors.sort(function(a,b) {
      //   let nameA = a.last.toUpperCase(); // ignore upper and lowercase
      //   let nameB = b.last.toUpperCase(); // ignore upper and lowercase
      //   return nameA > nameB ? 1 : -1;
      // })
  
     //console.table(lastNameSort)

     // people by last name
    //  let peopleSort = people.sort((a,b) => {
    //   let nameA = a[0].toUpperCase(); // ignore upper and lowercase
    //   let nameB = b[0].toUpperCase(); // ignore upper and lowercase
    //   return nameA > nameB ? -1 : 1;

    //  })
     //console.table(peopleSort)


      // 8. Reduce Exercise DONE
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      let transportCount = data.reduce((allTransport,transport) => {
        if(transport in allTransport) {
          allTransport[transport]++;
        } else {
          allTransport[transport] = 1;
        }
        return allTransport
      }, {});
     console.log(transportCount)