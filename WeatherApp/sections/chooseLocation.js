const bucharestButton = document.querySelector(".dropdown-menu .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu .oradea");
const aradButton = document.querySelector(".dropdown-menu .arad");
const sibiuButton = document.querySelector(".dropdown-menu .sibiu");

console.log(bucharestButton, timisoaraButton, oradeaButton);

function updateCurrentCityName(city) {
    // prima data selectam tagul de html care este dedicat afisarii orasului curent
    const currentCity = document.querySelector(".current-city");
    console.log(currentCity);
    currentCity.innerText = city;
}

// adaugam event listener pentru fiecare buton
bucharestButton.addEventListener("click", function(){
    // aici ar trebui sa schimbam orasul curent din html
   updateWeather("București");
});
timisoaraButton.addEventListener("click", function(){
    // aici ar trebui sa schimbam orasul curent din html
    updateWeather("Timișoara");
});
oradeaButton.addEventListener("click", function(){
    // aici ar trebui sa schimbam orasul curent din html
    updateWeather("Oradea");
});

aradButton.addEventListener("click", function(){
    updateWeather("Arad");
});

sibiuButton.addEventListener("click", function(){
    updateWeather("Sibiu");
});

function updateWeather(city) {
    localStorage.setItem("city", city);
    updateCurrentCityName(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
}


