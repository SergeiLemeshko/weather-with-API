VANTA.CLOUDS({
	el: "#intro",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200.00,
	minWidth: 200.00,
	skyColor: 0x6ca5ff
});

const getWeather = function () {

	let btn = document.querySelector('.button');

	btn.addEventListener('click', (e) => {
		if (e.target) {
			e.preventDefault();
			fetch('https://api.openweathermap.org/data/2.5/weather?id=824987&appid=6570cd41987b5449148fe067242cff35')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					document.querySelector('.temperature').innerHTML = `Температура: ${Math.floor(data.main.temp - 273) + "&deg;"}`;
					document.querySelector('.wind').textContent = `Ветер: ${data.wind.speed} км/ч`;
				});
		}
	});
};

getWeather();

