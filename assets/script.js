
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
            // delete this
            renderWeatherCard(data.list);
            //
        })
        .catch(function (error) {
            console.error(error);
        });

};

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    getWeather(this.city.value);
});

//this gets deleted
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

    var titleEl = document.createElement('h5');
    titleEl.setAttribute('class', 'card-title');
    titleEl.textContent = 'today';

    var tempEl = document.createElement('p');
    tempEl.setAttribute('class', 'card-text');
    tempEl.textContent = 'Temp: ' + weather.main.temp;

    var windEl = document.createElement('p');
    windEl.setAttribute('class', 'card-text');
    windEl.textContent = 'Wind: ' + weather.wind.speed;

    var humidityEl = document.createElement('p');
    humidityEl.setAttribute('class', 'card-text');
    humidityEl.textContent = 'Humidity: ' + weather.main.humidity;



    //var linkEl = document.createElement('a');
    //linkEl.href = 'https://www.imdb.com/title/' + movie.imdbId;
    //linkEl.setAttribute('target', 'imdb');
    //linkEl.textContent = 'More info';


    bodyEl.append(titleEl, tempEl, windEl, humidityEl);

    cardEl.append(imgEl, bodyEl);

    return cardEl;
};

function renderWeatherCard(forecast) {
    var resultsEl = document.getElementById('weather-results');
    for (i = 0; i < 33; i += 8) {
        var weatherCard = createWeatherCard(forecast[i]);
        resultsEl.append(weatherCard);
    }
}
//

// these get added back
//document.getElementById("dateDay3").innerHTML = dayjs().add(2, 'day').format('MMMM, D, YYYY');
//document.getElementById("dateTomorrow").innerHTML = dayjs().add(1, 'day').format('MMMM, D, YYYY');
//document.getElementById("dateDay4").innerHTML = dayjs().add(3, 'day').format('MMMM, D, YYYY');
//document.getElementById("dateDay5").innerHTML = dayjs().add(4, 'day').format('MMMM, D, YYYY');
//document.getElementById("dateDay6").innerHTML = dayjs().add(5, 'day').format('MMMM, D, YYYY');
document.getElementById("dateToday").innerHTML = dayjs().format('MMMM, D, YYYY');


/*

*/

















































//document.getElementById('temp1')





//function createWeatherCard(weather) {

//var cardEl = document.createElement('article');
//cardEl.setAttribute('class', 'card, m-3');

//var listEl = document.createElement('ul');
//listEl.setAttribute('class', 'list-group, list-group-flush, card1');

//var temp1 = document.createElement('li');
//temp1.setAttribute('class', 'list-group-item item1');
//temp1.setAttribute.textcontent = 'data.list[0].main.temp';

//listEl.append(temp1)

    //};











//  var cardEl = document.createElement('article');
//cardEl.setAttribute('class', 'card, m-3');
//cardEl.setAttribute('style', 'width: 12rem');

//  var bodyEl = document.createElement('div');
//  bodyEl.setAttribute('class', 'card-body');

//  var pEl = document.createElement('p');
//  pEl.setAttribute('class', 'card')       ???
//  pEl.innerHTML = dayjs().format('MMMM, D, YYYY');  ???

//  var imgEl = document.createElement('img');
//  imgEl.setAttribute('src', data.list[0].);
//  imgEl.setAttribute('alt', 'weather condition Icon');
//  imgEl.setAttribute('class', '??');




///  return cardEl.append(imgEl);
//}

// useful trick - use comsole log to see if inputs are what you want then replace console log with function

//  cardEl.classList.add('card, m-3'); could use instead of setAttribute
//   cardEl.style.width = '18rem';   could use instead of setAttribute


//can i put icon # in src string using a variable

//    aria-describedby="emailHelp"   is this needed in form id

// d-flex flex-
/*
var temp1 = data.link[0].main.temp;
var temp2 = data.link[8].main.temp;
var temp3 = data.link[16].main.temp;
var temp4 = data.link[24].main.temp;
var temp5 = data.link[32].main.temp;
var temp6 = data.link[40].main.temp;

var wind1 = data.link[0].wind.speed;
var wind2 = data.link[8].wind.speed;
var wind3 = data.link[16].wind.speed;
var wind4 = data.link[24].wind.speed;
var wind5 = data.link[32].wind.speed;
var wind6 = data.link[40].wind.speed;

var humidity1 = data.link[0].main.humidity;
var humidity2 = data.link[8].main.humidity;
var humidity3 = data.link[16].main.humidity;
var humidity4 = data.link[24].main.humidity;
var humidity5 = data.link[32].main.humidity;
var humidity6 = data.link[40].main.humidity;

var icon1 = data.link[0].weather[0].icon;
var icon2 = data.link[8].weather[0].icon;
var icon3 = data.link[16].weather[0].icon;
var icon4 = data.link[24].weather[0].icon;
var icon5 = data.link[32].weather[0].icon;
var icon6 = data.link[40].weather[0].icon;
*/
