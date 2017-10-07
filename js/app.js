$(document).ready(function(){


	var long;
	var lat;
  var celsius;
  var fahrenheit;


		navigator.geolocation.getCurrentPosition(function(position){

			long = position.coords.longitude;
			lat = position.coords.latitude;


var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&lang=fr'+'&units=metric&appid=d475e2ed504ab40f4de6c1b3cba9ebcc';

$.getJSON(url, function(data){
var weatherType = data.weather[0].description;
var windSpeed = data.wind.speed;
var icon = data.weather[0].icon;
var city = data.name;
var country = data.sys.country;
var description = data.weather[0].description;
var celsius = data.main.temp;
fahrenheit = celsius + 9/5 +32;

  $('.card').html( city + '<br> Temp: '+celsius+' °C'+ '<br> Wind Speed :'+windSpeed+'M/s');
  $('.icon').html('<img src="http://openweathermap.org/img/w/' + icon + '.png" /> ' + '<br>'+weatherType);

    console.log(city);
		console.log(weatherType);
		console.log(windSpeed);
		console.log(icon);
      })
    })
});
