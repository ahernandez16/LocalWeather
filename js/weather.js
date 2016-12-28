$(document).ready(function() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			console.log(lat + " " + lon);
			$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=e9b433f7ed306860db69ea25723a5f48", function (data){
				var city = data.name;
				var temp = data.main.temp;
				$("#city").html(city);
				$("#temp").html(temp);
				
			});
		});
	} else {
		$("#tracker").html("Unable to display any data from API");
	}
});