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



    let city = "goa";
    const apiKey = "f54c9746eeb575b169255821f07ad9a9"; // API key should be a string

    async function fetchapi() {
        try {
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }

            let result = await data.json();
            console.log(result);
            // console.log(result)
        } catch (err) {
            console.log("Error: eeujfeb", err);
        }
    }

    // Call the async function
    fetchapi();


