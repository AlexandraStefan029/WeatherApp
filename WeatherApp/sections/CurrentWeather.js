// aici vom declara functia care ne cheama API ul de la openweather pentru vremea curenta si ne va afisa datele in pagina, apelul catre functia asta se va face din chooseLocation.js(pe event listener deja agaugate pe butoanele din dropdown)

function displayCurrentWeather(city) {
    // prima data ne generam linkul catre care vom face callul
    const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
    console.log(currentWeatherEndpoint);
  
    fetch(currentWeatherEndpoint)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // vom extrage datele care ne intereseaza de pe ce am primit de la API, care ne a trimis raspunsul sub forma de obiect: name, dt, main, weather, wind
        // const distruncturing cand avem de a face cu obiecte
        const { name, dt, main, weather, wind } = data;
        // functia getDayOfWeek este un utilitar creat de noi
        const day = getDayOfTheWeek(dt);
        const hours = getHour(dt);
        console.log(hours);
        const temperature = Math.round(main.temp);
        const realFeel = Math.round(main.feels_like);
        console.log(weather);
        // atentie proprietatea weather este un array cu un singur element
        const weatherDescription = weather[0].description;
        const weatherIcon = getWeatherIcon(weather[0].icon);
        console.log(weatherIcon);
        const windSpeed = Math.round(windToKmPerHour(wind.speed));
        console.log(windSpeed);

        // afisam datele primite si formatate mai sus in pagina
        // pentru asta prima data va trebui sa scriem un selector de JS care sa accesezeze elementul DOM

        const currentWeatherContainer = document.querySelector(".current-weather");

        // al doilea pas folosim proprietatea innerHTML de pe variabila care a accesat elementul de DOM -> inseram datele 
        currentWeatherContainer.innerHTML = `
        <div class="px-3">
          <div class="fs-2 mb-2"><strong>${name}</strong></div>
          <div class="fs-4"><strong>${day}</strong>, ${hours}</div>
          <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
            <img src="${weatherIcon}" />
          </div>
        </div>
        <div class="px-3">
          <p class="fs-5">Real feel: <strong>${realFeel}°C</strong></p>
          <p class="fs-5 text-capitalize">${weatherDescription}</p>
          <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
        </div>
        `;
    });
}
