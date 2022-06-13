let now = new Date();
let day = now.getDay();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[day];
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinute = now.getMinutes();
if (currentMinute < 10) {
  currentMinute = `0${currentMinute}`;
}
let finalDate = document.querySelector(".date");
finalDate.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "57302bc3b033b0a28c10dc41ed39b53f";
  let apiUrlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlGeo).then(showTemp);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function showTemp(response) {
  let cTemp = Math.round(response.data.main.temp);
  let temp = document.querySelector(".mainTemp");
  temp.innerHTML = `${cTemp}°C`;
  let h1 = document.querySelector("#cityH1");
  console.log(response.data);

  h1.innerHTML = response.data.name;
  let info = document.querySelector("#description");
  info.innerHTML = response.data.weather[0].description;

  let mainIcon = document.querySelector("#icon");
  let mainIconURL = response.data.weather[0].icon;
  mainIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${mainIconURL}@2x.png`
  );
}

function searchCity(city) {
  let apiKey = "57302bc3b033b0a28c10dc41ed39b53f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName").value;
  searchCity(city);
}

let form = document.querySelector("#form");
form.addEventListener("submit", handleSubmit);

let currentLocBtn = document.querySelector("#secondary");
currentLocBtn.addEventListener("click", getCurrentLocation);

//function changeTempCels(event) {
// event.preventDefault();
//let temp = document.querySelector(".mainTemp");
//temp.innerHTML = `29°`;
//}
searchCity("New York");
