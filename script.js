const restCountriesAPI = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countriesHTML = countries.map((country) => getCountry(country));

  const container = document.getElementById("countries");
  container.innerHTML = countriesHTML.join(" ");
};

const getCountry = (country) => {
  return `
      <div class="country-div">
      <img src="${country.flags.png}">
      <h2>${country.name.common}</h2>
      <h4>Population : ${country.population}</h4>
      <h4>Region     : ${country.region}</h4>
      <h4>Capital    : ${country.capital}</h4>
      </div>`;
};

restCountriesAPI();
