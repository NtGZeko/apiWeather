const APIKEY = 'a1a7d8984d40be6d1c25100fb21f0974';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Lille&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
  response.json().then((data) => console.log(data))
);
