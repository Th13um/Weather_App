$.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      jsonp: "callback",
      dataType: "jsonp",
      data: {
          lat: 48.6167,
          lon: 2.3833,
          units: 'metric',
          APPID: "d475e2ed504ab40f4de6c1b3cba9ebcc"
      },
      success: function( response ) {
          console.log( response ); // server response
          $('.card').html( response.name + '<br>'+response.main.temp+' °C');
          $('.icon').html('<img src="http://openweathermap.org/img/w/' + response.weather[0].icon + '.png" /> ' + '<br>'+ response.weather[0].main);

      }
  });
