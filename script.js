function openModal(){
    let main_modal=document.getElementById("main_modal")
    if(main_modal.classList.contains("hidden")){
    main_modal.classList.remove("hidden");
    }
}
function closeModal(){
    let main_modal=document.getElementById("main_modal")
    if(!main_modal.classList.contains("hidden")){
    main_modal.classList.add("hidden");
    }
}
function openSearch(){
    let searchBar=document.getElementById("searchbar")
    let searchIcon=document.getElementById("search_icon")
    searchBar.classList.remove("hidden");
    searchIcon.classList.remove("hidden");
    
    setTimeout(()=>{
        searchBar.classList.remove("scale-0");
        searchBar.classList.add("scale-100");
    },100)
}
function closeSearch(){
    let searchBar=document.getElementById("searchbar")
    let main_modal=document.getElementById("main_modal")
    let searchIcon=document.getElementById("search_icon")
    if(main_modal.classList.contains("hidden")){
    main_modal.classList.remove("hidden");
    }
    if(!searchBar.classList.contains("scale-0")){
        searchBar.classList.add("scale-0");
        setTimeout(()=>{searchBar.classList.add("hidden");
            searchIcon.classList.add("hidden");

        },160)
        
        searchBar.classList.remove("scale-100");
    } 
}

let city_name=document.getElementById("city_name")
let type_of_weather=document.getElementById("type_of_weather")
let temperature=document.getElementById("temperature")
let Windspeed=document.getElementById("Windspeed")
let Humidity=document.getElementById("Humidity")
let Clouds=document.getElementById("Clouds")

let inputValue = "";

function handleInput(event) {
    inputValue = event.target.value;
}

function handleClick() {
    if (inputValue === "") {
        alert("Input value is empty!");
    } else {
       
        // Do something with the input value
        console.log(inputValue);
        fetchapi(inputValue)
        //  openModal()
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        if (inputValue === "") {
            alert("Input value is empty!");
        } else {
            
            // Do something with the input value
            console.log(inputValue);
            fetchapi(inputValue)
            
        }
    }
}

let input = document.getElementById("searchbar");
let button = document.getElementById("search_icon");

input.addEventListener("input", handleInput);
button.addEventListener("click", handleClick);
input.addEventListener("keypress", handleKeyPress);


const apiKey = "f54c9746eeb575b169255821f07ad9a9";
// let city="delhi"

async function fetchapi(present_city) {
        try {
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${present_city}&appid=${apiKey}&units=metric`);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }

            let result = await data.json();
            console.log(result);
            console.log(result.main);

            renderData(result)
            openModal()
            // console.log(result)
        } catch (err) {
            closeModal()
            console.log("Error:", err);
        }
}

    // Call the async function
    // fetchapi(city);

function renderData(result){
    city_name.textContent=result.name;
    type_of_weather.textContent=result.weather[0].main;
    temperature.textContent=result.main.temp;
    Windspeed.textContent=result.wind.speed;
    Humidity.textContent=result.main.humidity;
    Clouds.textContent=result.main.pressure;
}

document.getElementById('MyCity').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

async function fetchWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        renderData(data);

        console.log(data); // Log the data for debugging
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}




function updateClock() {
    let now = new Date();
    let time_hour = now.getHours();
    let time_minutes = now.getMinutes();
    let time_seconds = now.getSeconds();

    let hour = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    hour.textContent = time_hour < 10 ? `0${time_hour}` : time_hour;
    minutes.textContent = time_minutes < 10 ? `0${time_minutes}` : time_minutes;
    seconds.textContent = time_seconds < 10 ? `0${time_seconds}` : time_seconds;
}

updateClock();

// Update the clock every second
setInterval(updateClock, 1000);



// (https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric);

// (https://api.openweathermap.org/data/2.5/weather?q=goa&appid=f54c9746eeb575b169255821f07ad9a9&units=metric);


// try{
//     let city="goa"
//     const apiKey="f54c9746eeb575b169255821f07ad9a9";
// async function fetchApi(){
//     let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//     let result=await data.json();
//     console.log(result)
// }
// }catch(err){
// console.log(Error,err)
// }

// fetchApi();

// function openSearch(){
//     let searchBar=document.getElementById("searchbar")
//     searchBar.classList.remove("hidden");
// }
// function closeSearch(){
//     let searchBar=document.getElementById("searchbar")
//     if(!searchBar.classList.contains("hidden")){
//         searchBar.classList.add("hidden");
//     } 
// }

// let time_hour = new Date().getHours();
// let time_minutes = new Date().getMinutes();
// let time_seconds = new Date().getSeconds();
// console.log(time_hour);


// let hour=document.getElementById("hours");
// let minutes=document.getElementById("minutes");
// let seconds=document.getElementById("seconds");

// let present_hour=time_hour
// let present_minutes=time_minutes
// let present_seconds=time_seconds

// function increase( time_seconds){
//     if(present_seconds===59){
//         present_seconds=0
//         if(present_minutes===59){
//             present_minutes=0
//             if(present_hour===23){
//                 present_hour=0
//             }
//             else{
//                 present_hour++
//             }
//             if(present_hour<10){
//                 hour.textContent=`0${present_hour}`;
//             }else{
//                 hour.textContent=present_hour;
//             }
//         }
//         else{
//             present_minutes++
//         }
//         if(present_minutes<10){
//             minutes.textContent=`0${present_minutes}`;
//         }else{
//             minutes.textContent=present_minutes;
//         } 
//     }
//     else{
//         present_seconds++
//     }
//     if(present_seconds<10){
//         seconds.textContent=`0${present_seconds}`;
//     }else{
//         seconds.textContent=present_seconds;
//     }
    
// }


// if(time_hour<10){
//     hour.textContent=`0${time_hour}`;
// }else{
//     hour.textContent=time_hour;
// }

// if(time_minutes<10){
//     minutes.textContent=`0${time_minutes}`;
// }else{
//     minutes.textContent=time_minutes;
// }

// if(time_seconds<10){
//     seconds.textContent=`0${time_seconds}`;
// }else{
//     seconds.textContent=time_seconds;
// }

// setInterval(() => increase(time_seconds), 1000);