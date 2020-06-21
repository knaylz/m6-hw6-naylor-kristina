// Global variables - can access anywhere
var button = document.getElementById('generate-city-weather');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        // Populate city and weather function
              var cityNameText = document.createTextNode(apiResult.name);
              var cityNameSpan = document.getElementById('city-name');
              cityNameSpan.appendChild(cityNameText);
              var weatherTodayText = document.createTextNode(apiResult.weather[0].description);
              var weatherTodaySpan = document.getElementById('weather-today');
              weatherTodaySpan.appendChild(weatherTodayText);
        }        

};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=19806,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();