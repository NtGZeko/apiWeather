const APIKEY = 'a1a7d8984d40be6d1c25100fb21f0974';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Lille&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
  response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = data.main.temp + '°';
    document.querySelector('#desc').innerHTML = data.weather[0].description;
    document.querySelector('#lat').innerHTML = data.coord.lat + '°';
    document.querySelector('#lon').innerHTML = data.coord.lon + '°';
  })
);
