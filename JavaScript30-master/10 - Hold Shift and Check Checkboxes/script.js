const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    // check if shiftkey is held
    // check if another input is clicked
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        // loop over checkboxes
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
            }

            if(inBetween) {
                checkbox.checked = true
            }
        });
       
    } 
    

   lastChecked = this;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))