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
let currentMinute = now.getMinutes();

finalDate = document.querySelector(".date");
finalDate.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

function currentCity(event) {
  event.preventDefault();
  let city = document.querySelector("#cityName");
  let h1 = document.querySelector("#cityH1");
  h1.innerHTML = city.value;
}

let form = document.querySelector("#form");
form.addEventListener("submit", currentCity);

function changeTempCels(event) {
  event.preventDefault();
  let temp = document.querySelector(".mainTemp");
  temp.innerHTML = `29°`;
}

let newCels = document.querySelector("#cels");
newCels.addEventListener("click", changeTempCels);

function changeTempFar(event) {
  event.preventDefault();
  let temp = document.querySelector(".mainTemp");
  temp.innerHTML = `32°`;
}
let newFar = document.querySelector("#far");
newFar.addEventListener("click", changeTempFar);
