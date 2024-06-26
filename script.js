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

function openSearch(){
    let searchBar=document.getElementById("searchbar")
    searchBar.classList.remove("hidden");
}
function closeSearch(){
    let searchBar=document.getElementById("searchbar")
    if(!searchBar.classList.contains("hidden")){
        searchBar.classList.add("hidden");
    } 
}

let time_hour = new Date().getHours();
let time_minutes = new Date().getMinutes();
let time_seconds = new Date().getSeconds();
console.log(time_hour);


let hour=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

let present_hour=time_hour
let present_minutes=time_minutes
let present_seconds=time_seconds

function increase( time_seconds){
    if(present_seconds===59){
        present_seconds=0
        if(present_minutes===59){
            present_minutes=0
            if(present_hour===23){
                present_hour=0
            }
            else{
                present_hour++
            }
            if(present_hour<10){
                hour.textContent=`0${present_hour}`;
            }else{
                hour.textContent=present_hour;
            }
        }
        else{
            present_minutes++
        }
        if(present_minutes<10){
            minutes.textContent=`0${present_minutes}`;
        }else{
            minutes.textContent=present_minutes;
        } 
    }
    else{
        present_seconds++
    }
    if(present_seconds<10){
        seconds.textContent=`0${present_seconds}`;
    }else{
        seconds.textContent=present_seconds;
    }
    
}


if(time_hour<10){
    hour.textContent=`0${time_hour}`;
}else{
    hour.textContent=time_hour;
}

if(time_minutes<10){
    minutes.textContent=`0${time_minutes}`;
}else{
    minutes.textContent=time_minutes;
}

if(time_seconds<10){
    seconds.textContent=`0${time_seconds}`;
}else{
    seconds.textContent=time_seconds;
}

setInterval(() => increase(time_seconds), 1000);


    // const apiKey = "f54c9746eeb575b169255821f07ad9a9"; // API key should be a string

    // async function fetchapi() {
    //     try {
    //         let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    //         if (!data.ok) {
    //             throw new Error(`HTTP error! status: ${data.status}`);
    //         }

    //         let result = await data.json();
    //         console.log(result);
    //         // console.log(result)
    //     } catch (err) {
    //         console.log("Error: eeujfeb", err);
    //     }
    // }

    // // Call the async function
    // fetchapi();


