$(document).ready(function(){
	var long;
	var lat;
	// geolocation of the browser
	navigator.geolocation.getCurrentPosition(function(position){
		long = position.coords.longitude;
		lat = position.coords.latitude;
		//Get Location weather Info
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&lang=fr'+'&units=metric&appid=d475e2ed504ab40f4de6c1b3cba9ebcc';
		$.getJSON(url, function(data){
			var weatherType = data.weather[0].description;
			var windSpeed = data.wind.speed;
			var icon = data.weather[0].icon;
			var city = data.name;
			var country = data.sys.country;
			var description = data.weather[0].description;
			var celsius = data.main.temp;
			var fahrenheit = (celsius * 9/5 +32).toFixed(2);
			var Temperature = celsius.toFixed(2);
		//print the data on screen
			  $('.city').html(city +", "+ country);
				$('.wind').html('Wind Speed :'+ windSpeed +'M/s');
				$('.temperature').html('Temperature: '+ Temperature +'°C');
			  $('.icon').html('<img src="http://openweathermap.org/img/w/'+ icon +'.png" /> ' +'<br>'+ weatherType);
		//function to change the degree units
				$(".degree").on("click", function(){
					if(Temperature === celsius){
					$('.temperature').html('Temperature: '+fahrenheit+'°F');
					Temperature = fahrenheit;
				}else{
					$('.temperature').html('Temperature: '+celsius+'°C');
					Temperature = celsius;
					}
				})
      })
    })
});
