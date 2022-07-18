const refreshButton = document.querySelector('.location')
const lat= document.querySelector('.lat')
const long= document.querySelector('.long')
const vel= document.querySelector('.vel')

function printLocation(latitude,longitude,velocity)
{
    lat.innerHTML=latitude;
    long.innerHTML=longitude;
    vel.innerHTML=velocity;
}
async function fetchLocation()
{
    const url="https://api.wheretheiss.at/v1/satellites/25544";

        const result= await  fetch(url);
        const data= await result.json();
        const {latitude,longitude,velocity}=data;

        printLocation(latitude,longitude,velocity);
}


refreshButton.addEventListener('click',function(){
   fetchLocation();
})