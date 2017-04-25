$(document).ready(function(){
	var lat;
	var lon;

	//show the weather
	getWeather();

	function getWeather(){
		var ipApi = "http://ip-api.com/json";

		//get location data
		$.getJSON(ipApi, function(data){
			console.log(data);
			lat = data.lat;
			lon = data.lon;

			//getting weather data
			var wapi = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=a4dd8201a4fccd896622f7c7ec8f4a8e";
			$.getJSON(wapi, function(val){
				console.log(val);
				var name = val.name;
				var ktemp = val.main.temp;
				var ctemp = (ktemp - 273).toFixed(2);
				var ctempstr = ctemp +"°C";
				var ftemp = (ctemp * (9/5) + 32).toFixed(2);
				var ftempstr = ftemp +"°F";
				var mainW = val.weather[0].main;

				$("#degree").html(ctempstr);
				$("#city").html(name);
				$("#text").html(mainW);

				//Toggle C to F
				var toggle = $("#convert");
				var flag = false;
				toggle.click(function(){
					if(flag==false){
						$("#degree").html(ftempstr);
						flag=true;
					}else{
						$("#degree").html(ctempstr);
						flag=false;
					}
				});
			});
		});
	}

});
