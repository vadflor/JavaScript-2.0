const param = {
    "url" : "https://api.openweathermap.org/data/2.5/",
    "appid" : "8476743664c0eaf0a47a39e02b99bebb"
}

function getWeather(){

    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}


function showWeather(data) {
	console.log(data);

    document.querySelector('.card-title').textContent = data.name;
    document.querySelector('.degrees').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.text-muted').innerHTML = 'Ветер ' + Math.round(data.wind.speed) + ' м/с' + '<br>';
    document.querySelector('.text-muted').innerHTML += 'Влажность ' + data.main.humidity +'%' + '<br>'; 
    document.querySelector('.text-muted').innerHTML += 'Давление ' + data.main.pressure;
    document.querySelector('.icon').innerHTML = `<img src ="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
}





getWeather();
document.querySelector('#city').onchange = getWeather;