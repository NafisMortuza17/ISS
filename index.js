const refreshButton = document.querySelector('.location')
const lat= document.querySelector('.lat')
const long= document.querySelector('.long')


function printLocation(latitude,longitude)
{
    lat.innerHTML=latitude;
    long.innerHTML=longitude;
}
async function fetchLocation()
{
    const url="https://api.wheretheiss.at/v1/satellites/25544";

        const result= await  fetch(url);
        const data= await result.json();
        const {latitude,longitude}=data;

        printLocation(latitude,longitude);
}


refreshButton.addEventListener('click',function(){
   fetchLocation();
})