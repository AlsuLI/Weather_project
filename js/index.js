const changeWeatherBtn = document.querySelector(".change__city");
const weatherInfo = document.querySelector(".weather__main__info");
const finderForm = document.querySelector(".finder__form");
const findCityBtn = document.querySelector(".find__city");
const temp = document.querySelector(".weather__temperature");
const cityTyper = document.querySelector(".city__typer");
const cityName = document.querySelector(".city__name");
const condition = document.querySelector(".condition");
const errorContainer = document.querySelector(".error");
const errorBtn = document.querySelector(".error__btn");
changeWeatherBtn.addEventListener("click", (e) => {
  weatherInfo.className = "weather__main__info2";
  finderForm.className = "finder__form2";
});

const apiKey = "c4d46da4340a6beb0a68b1ac2ce53651";

function findLocation() {
  if (!navigator.geolocation) {
    temp.textContent = "Something wrong with your geoposition";
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  async function success(position) {
    const { latitude, longitude } = position.coords;
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c4d46da4340a6beb0a68b1ac2ce53651&units=metric`
    )
      .then((res) => res.json())
      .then((dat) => dat);
    temp.textContent = Math.round(data.main.temp) + "℃";
    condition.textContent = data.weather[0].main;
  }
  function error() {
    getWeather2();
  }
}
findLocation();

findCityBtn.addEventListener("click", () => {
  if (cityTyper.value.trim() === "") {
      cityTyper.value = "";
  } else {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityTyper.value.trim()}&appid=c4d46da4340a6beb0a68b1ac2ce53651&units=metric`
        );
        let dataCity = await response.json();
        temp.textContent = Math.round(dataCity.main.temp) + "℃";
        cityName.textContent = dataCity.name;
        condition.textContent = dataCity.weather[0].main;
        weatherInfo.className = "weather__main__info";
        finderForm.className = "finder__form";
      } catch (err) {
        console.log("gggg");
        errorContainer.className = "error2";
        finderForm.className = "finder__form";
        tryAgain();
      }
      return dataCity;
    }
    getWeather();
  }
});

function tryAgain() {
  errorBtn.addEventListener("click", () => {
    errorContainer.className = "error";
    finderForm.className = "finder__form2";
  });
}
async function getWeather2() {
const apiGeo = "at_uenbxiKT4ksWaSsHUOuXyZVsWdG2x";
let dataMy = await fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => data);
  console.log(dataMy.ip);
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_uenbxiKT4ksWaSsHUOuXyZVsWdG2x&ipAddress=${dataMy.ip}`;
   const dataApi = await fetch(url)
     .then((response) => response.json())
     .then((data) => data);
     console.log(dataApi.location.city);
             const response2 = await fetch(
               `https://api.openweathermap.org/data/2.5/weather?q=${dataApi.location.city}&appid=c4d46da4340a6beb0a68b1ac2ce53651&units=metric`
             );
             let dataApiCity = await response2.json();
             temp.textContent = Math.round(dataApiCity.main.temp) + "℃";
             condition.textContent = dataApiCity.weather[0].main;
     cityName.textContent = dataApi.location.city;
  }
