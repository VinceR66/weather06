console.log("hello")



var city = "boston"


var API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=9e7196afba18b75635e3489a9e6a6b9e&units=imperial'


fetch(API_WEATHER_URL)
    .then(function (res) {
        if (!res.ok) throw new Error('oops')

        return res.json();
    })
    .then(function (data) {
        console.log('data :>>', data);
        var dump = document.createElement('pre');
        dump.textContent = JSON.stringify(data.list[0], null, 2);
        document.body.appendChild(dump);
    })
    .catch(function (error) {
        console.error(error);
    });

//function createWeatherCard(list) {
//  var cardEl = document.createElement('article');
//cardEl.setAttribute('class', 'card, m-3');
//cardEl.setAttribute('style', 'width: 18rem');

//  var bodyEl = document.createElement('div');
//  bodyEl.setAttribute('class', 'card-body');

//  var pEl = document.createElement('p');
//  pEl.setAttribute('class', 'card)       ???
//  pEl.innerHTML = dayjs().format('MMMM, D, YYYY');  ???



//  var imgEl = document.createElement('img');
//  imgEl.setAttribute('src',list.);
//  imgEl.setAttribute('alt', 'weather condition Icon');
//  imgEl.setAttribute('class', '??');

//  var bodyEl = document.createElement('div');
//  bodyEl.setAttribute('class', 'card-body');

///  return cardEl.append(imgEl);
//}


//  cardEl.classList.add('card, m-3'); could use instead of setAttribute
//   cardEl.style.width = '18rem';   could use instead of setAttribute


//can i put icon # in src string using a variable



//console.log(data.list[0]);