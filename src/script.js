let now = new Date();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = String(now.getMinutes()).padStart(2, "0");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

document.querySelector("#dayTime").innerHTML = `${day} ${hour}:${minutes}`;

function displayTemperature(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  CTemperature = response.data.main.temp;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}

function search(city) {
  let apiKey = "c48d919f779c3900f03f3a5b1a2af8c1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios(apiUrl).then(displayTemperature);
}

function handlesubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#enter-city-input");
  search(cityInputElement.value);
  //  console.log(cityInputElement.value);
}

function displayFTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  CLink.classList.remove("active");
  FLink.classList.add("active");
  let FTemperature = (CTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(FTemperature);
}

function displayCTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  CLink.classList.add("active");
  FLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(CTemperature);
}

let CTemperature = null;

let FLink = document.querySelector("#FLink");
FLink.addEventListener("click", displayFTemperature);

let CLink = document.querySelector("#CLink");
CLink.addEventListener("click", displayCTemperature);

let apiKey = "c48d919f779c3900f03f3a5b1a2af8c1";
let city = "Odesa";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios(apiUrl).then(displayTemperature);

let form = document.querySelector("#search-form");
form.addEventListener("submit", handlesubmit);
search("Odessa");
