checkWeather();

async function checkWeather(city = 'Kyiv') {
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=59537c010dd22e9e4c7b8cf622971b35`;
   const req = await fetch(url);
   const weather = await req.json();

   document.querySelector('.api__result').remove();
   const apiResult = document.createElement('div');
   apiResult.className = "api__result";
   document.querySelector('.contact_section__api-block').append(apiResult);

   const apiCity = document.createElement('div');
   apiCity.className = 'api__item';
   apiCity.innerHTML = `City: ${weather["name"]}`;
   apiResult.append(apiCity);

   const apiTemp = document.createElement('div');
   apiTemp.className = 'api__item';
   apiTemp.innerHTML = `Temperature: ${parseInt(Number(weather["main"]["temp"]) - 273)}°C`;
   apiResult.append(apiTemp);

   const apiHumidity = document.createElement('div');
   apiHumidity.className = 'api__item';
   apiHumidity.innerHTML = `Humidity: ${weather["main"]["humidity"]}%`;
   apiResult.append(apiHumidity);

   const apiWeather = document.createElement('div');
   apiWeather.className = 'api__item';
   apiWeather.innerHTML = `Weather: ${weather["weather"][0]["main"]}`;
   apiResult.append(apiWeather);
}

let formCity= document.querySelector('#city');
formCity.oninput = () => { formName.classList.add('form__invalid') };

document.querySelector('#weather').addEventListener('submit', (event) => {
   event.preventDefault();
   formCity.classList.remove('form__invalid');

   this.formCity = formCity.value;
   formCity.value = "";
   checkWeather(this.formCity);
});
