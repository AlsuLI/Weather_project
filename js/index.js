const changeWeatherBtn = document.querySelector(".change__city");
const weatherInfo = document.querySelector(".weather__main__info");
const finderForm = document.querySelector(".finder__form");
const findCityBtn = document.querySelector(".find__city");
changeWeatherBtn.addEventListener('click', (e) => {
  weatherInfo.className = "weather__main__info2";
  finderForm.className = "finder__form2";
})
// navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
// } 
// )

// const apiKey = 'c4d46da4340a6beb0a68b1ac2ce53651';
//  const url = https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}`
// let data = await fetch("https://emoji.ymatuhin.workers.dev/")
//   .then(res => res.json()).then(dat => dat);
//   console.log(data);
// findCityBtn.addEventListener('click', findLocation)
function findLocation() {
  if (!navigator.geolocation) {
    console.log ('no')
  } else {
    navigator.geolocation.getCurrentPosition(success, error)
  }
  function success(position) {
    // const { } = position.coords;
    console.log(position.coords);
    // await fetch `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=c4d46da4340a6beb0a68b1ac2ce53651`;
  } 
  function error() {
   console.log('error');
 }
}
findLocation()
