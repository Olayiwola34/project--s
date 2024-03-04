
//assign variables
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey='6dedbe1f8aaad05762d1d409336c5c56';

const searchInput=document.querySelector('.search-name')
const searchbtn=document.querySelector('.searchbtn')
const weatherIcon=document.querySelector('.weather-icon')



//weather details function using async function
async function weatherDetails(city){
    const response=await fetch ( apiUrl + city  + `&appid=${apiKey}`)
if(response.status==404){
    document.querySelector('.error').style.display='block';
    document.querySelector('.weather').style.display='none';
}else{

    var data= await response.json();
    //console.log(data)
    document.querySelector('.weather').style.display='block';
    document.querySelector('.error').style.display='none'


     document.querySelector('.city-name').innerHTML=data.name;
     document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +'°C';
     document.querySelector('.value1').innerHTML=data.wind.speed +'km/hr';
     document.querySelector('.value2').innerHTML=data.main.humidity +'%';

     if(data.weather[0].main=='Rain'){
        weatherIcon.src='assets/images/rain.png'
     }else if(data.weather[0].main=='Clouds'){
        weatherIcon.src='assets/images/clouds.png'
     }else if(data.weather[0].main=='Clear'||'Haze'){
        weatherIcon.src='assets/images/clear.png'

     }else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='assets/images/drizzle.png'
     }else if(data.weather[0].main=='Mist'){
        weatherIcon.src='assets/images/mist.png'
     }





}
}
//weatherDetails()



//Get the city weather details by listening to the click event
searchbtn.addEventListener('click',()=>{
weatherDetails(searchInput.value)

})