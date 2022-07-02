const request = require("request");

let countriesNames = [];

const getCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  request.get(url, (err, reponse, body) => {
    // console.log("#getCountries get error >>>>", err);
    // console.log("#getCountries get error >>>>", body);
    if (err) {
      // console.log(err);
      return err;
    }
    const countries = JSON.parse(body);
    console.log(countries[0].name.common);

    countriesNames = countries.map((country)=>{
      
      return country.name.common;
    })

  });
};

getCountries();
