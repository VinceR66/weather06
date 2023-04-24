console.log("hello")


var city = 'boston'
var API_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=9e7196afba18b75635e3489a9e6a6b9e'


fetch(API_WEATHER_URL)
    .then(function (res) {
        if (!res.ok) throw new Error('oops')

        return res.json();
    })
    .then(function (data) {
        console.log('data :>>', data);
        var dump = document.createElement('pre');
        dump.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(dump);
    })
    .catch(function (error) {
        console.error(error);
    });

console.log(main[1]);