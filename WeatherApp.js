document.getElementById("dayTime").innerHTML = dayTimeFunction();

function dayTimeFunction() {
  const now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let fullDate =
    days[now.getDay()] + " " + now.getHours() + ":" + now.getMinutes();
  return fullDate;
}

function showTrmperature(response) {
  console.log(response);

  // temp
  let temperatureInt = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperatureInt");
  temperatureElement.innerHTML = temperatureInt + " °C";
  // description
  let description = document.querySelector("#temperature-description");
  description.innerHTML = response.data.weather[0].description;
}

let searchCityName = document.querySelector("#newCityName");

function changeCity(event) {
  event.preventDefault();
  let searchCityName = document.querySelector("#newCityName").value;
  let newCity = document.querySelector("#cityName");
  newCity.innerHTML = searchCityName;

  let apiKey = "506f81ff6aebb0332e08f00b0bd24d39";

  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchCityName +
    "&units=metric";

  axios.get(apiUrl + "&appid=" + apiKey).then(showTrmperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
// CURRENT POSITION
// function showPosition(position) {
//   let coords = document.querySelector("#coords");
//   coords.innerHTML =
//     "Your latitude is: " +
//     position.coords.latitude +
//     ". Your longitude is: " +
//     position.coords.longitude;
// }

// function getCurrentPosition() {
//   navigator.geolocation.getCurrentPosition(showPosition);
// }

// let buttonCurrentLocation = document.querySelector("#current-location");
// buttonCurrentLocation.addEventListener("click", getCurrentPosition);

// CONVECTOR
// let temp = document.querySelector("#temperatureInt");

// let celsiusConverterQuery = document.querySelector("#celsius");
// celsiusConverterQuery.addEventListener("click", celsiusConverter);

// let fahrenheitConverterQuery = document.querySelector("#fahrenheit");
// fahrenheitConverterQuery.addEventListener("click", fahrenheitConverter);

// function celsiusConverter(event) {
//   event.preventDefault();
//   temp.innerHTML = fToC(temp.innerHTML);
// }

// function fahrenheitConverter(event) {
//   event.preventDefault();
//   temp.innerHTML = cToF(temp.innerHTML);
// }

// function cToF(celsius) {
//   var fahrenheit;
//   fahrenheit = celsius * (9 / 5) + 32;
//   return fahrenheit;
// }

// function fToC(fahrenheit) {
//   var fTemp = fahrenheit;
//   var fToCel = ((fTemp - 32) * 5) / 9;
//   return fToCel;
// }

// Temperature API
