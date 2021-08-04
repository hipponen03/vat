function checkVAT(){
    const vat = document.getElementById('vat_number').value;
    console.log(vat);
    fetch('http://apilayer.net/api/validate?access_key=ebf07282c9e1a88ff7394324882a3141&vat_number=' + vat)
    .then((response) => {
    return response.json();
})
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
};

validate.addEventListener("click", (event) => {
    checkVAT();
});