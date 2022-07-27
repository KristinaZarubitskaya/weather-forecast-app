function displayTemperature(response) {
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
let apiKey = "c48d919f779c3900f03f3a5b1a2af8c1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Odessa&appid=${apiKey}&units=metric`;
axios(apiUrl).then(displayTemperature);

//DATE
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
