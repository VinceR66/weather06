
console.log("hello")

function getWeather(city) {

    var API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=9e7196afba18b75635e3489a9e6a6b9e&units=imperial'


    fetch(API_WEATHER_URL)
        .then(function (res) {
            if (!res.ok) throw new Error('oops')

            return res.json();
        })
        .then(function (data) {
            console.log('data :>>', data);
            var dump = document.createElement('pre');
            dump.textContent = JSON.stringify(data.list, null, 2);
            document.body.appendChild(dump);
            console.log(data.list[0].main.temp);

            renderWeatherCard(data.list);
            renderHeaderCard(data.list);
        })
        .catch(function (error) {
            console.error(error);
        });
};

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    getWeather(this.city.value);
});


function createHeaderCard(firstCard) {
    var cardEl = document.createElement('article');
    cardEl.setAttribute('class', 'card m-3');

    // var imgEl = document.createElement('img');
    // imgEl.setAttribute('src', "https://openweathermap.org/img/wn/" + firstCard.weather[0].icon + "@2x.png");
    // imgEl.setAttribute('alt', 'weather icon');
    // imgEl.setAttribute('class', 'card-img-middle');

    var bodyEl = document.createElement('div');
    bodyEl.setAttribute('class', 'card-body');

    var titleEl = document.createElement('h3');
    titleEl.setAttribute('class', 'card-title');
    titleEl.innerHTML = dayjs().add(0, 'day').format('MMMM, D, YYYY');


    var tempEl = document.createElement('p');
    tempEl.setAttribute('class', 'card-text');
    tempEl.textContent = 'Temp: ' + firstCard.main.temp;

    var windEl = document.createElement('p');
    windEl.setAttribute('class', 'card-text');
    windEl.textContent = 'Wind: ' + firstCard.wind.speed;

    var humidityEl = document.createElement('p');
    humidityEl.setAttribute('class', 'card-text');
    humidityEl.textContent = 'Humidity: ' + firstCard.main.humidity;

    bodyEl.append(titleEl, tempEl, windEl, humidityEl);

    cardEl.append(bodyEl);

    return cardEl;

};

function renderHeaderCard(cardOne) {
    var outcomeEl = document.getElementById('header-results');
    var headerCard = createHeaderCard(cardOne[0]);
    outcomeEl.append(headerCard);
}


function createWeatherCard(weather) {
    var cardEl = document.createElement('article');
    cardEl.setAttribute('class', 'card m-3');
    cardEl.setAttribute('style', 'width: 18rem');

    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png");
    imgEl.setAttribute('alt', 'weather icon');
    imgEl.setAttribute('class', 'card-img-middle');

    var bodyEl = document.createElement('div');
    bodyEl.setAttribute('class', 'card-body');

    var titleEl = document.createElement('h3');
    titleEl.setAttribute('class', 'card-title');
    titleEl.innerHTML = dayjs().add(((i + 1) / 8), 'day').format('MMMM, D, YYYY');

    var tempEl = document.createElement('p');
    tempEl.setAttribute('class', 'card-text');
    tempEl.textContent = 'Temp: ' + weather.main.temp;

    var windEl = document.createElement('p');
    windEl.setAttribute('class', 'card-text');
    windEl.textContent = 'Wind: ' + weather.wind.speed;

    var humidityEl = document.createElement('p');
    humidityEl.setAttribute('class', 'card-text');
    humidityEl.textContent = 'Humidity: ' + weather.main.humidity;

    bodyEl.append(titleEl, tempEl, windEl, humidityEl);

    cardEl.append(imgEl, bodyEl);

    return cardEl;

};

function renderWeatherCard(forecast) {
    var resultsEl = document.getElementById('weather-results');
    for (i = 7; i < 40; i += 8) {
        var weatherCard = createWeatherCard(forecast[i]);
        resultsEl.append(weatherCard);
    }
}




