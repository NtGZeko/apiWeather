const APIKEY = 'a1a7d8984d40be6d1c25100fb21f0974';

/* Appel a l'API openWeather avec ville en paramettre de fonction */
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  fetch(url).then((response) =>
    response.json().then((data) => {
      console.log(data);
      document.querySelector('#city').innerHTML = data.name;
      document.querySelector('#temp').innerHTML =
        Math.floor(data.main.temp) + '°';
      document.querySelector('#desc').innerHTML = data.weather[0].description;
      document.querySelector('#lat').innerHTML = data.coord.lat + '°';
      document.querySelector('#lon').innerHTML = data.coord.lon + '°';
    })
  );
};
// "<i class='fa-solid fa-wind'></i>" +

/* Ecouteur d'evenement sur la soumission du formulaire */
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});

apiCall('Paris');
