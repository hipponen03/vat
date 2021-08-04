function checkVAT(){

    // save VAT number into a variable
    const vat = document.getElementById('vat_number').value;

    // make a request to the API
    fetch('http://apilayer.net/api/validate?access_key=ebf07282c9e1a88ff7394324882a3141&vat_number=' + vat)
        // save data
    .then((response) => {
    return response.json();
})
        // output data from saved object
    .then(({ valid, database, format_valid, query, country_code, vat_number, company_name, company_address }) => {
    results.innerHTML = `
                    Valid: ${valid}<br>
                    Query: ${query}<br>
                    Country: ${country_code}<br>
                    Vat Num: ${vat_number}<br>
                    Database: ${database}<br>
                    Format Valid: ${format_valid}<br>
                    Company name: ${company_name}<br>
                    Company address: ${company_address}<br>`;
});
}

// add a listener for when the button is clicked to run the main function
validate.addEventListener("click", function() {
    checkVAT();
});