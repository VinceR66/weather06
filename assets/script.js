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
//  cardEl.classList.add('card, m-3');
//   cardEl.style.width = '18rem';
//cardEl.setAttribute('class', 'card, m-3');
//cardEl.setAttribute('style', 'width: 18rem');
//  var imgEl = document.createElement('img');
//  imgEl.setAttribute('src'.list.)




///  return cardEl;
//}


//can i put icon # in src string using a variable



//console.log(data.list[0]);