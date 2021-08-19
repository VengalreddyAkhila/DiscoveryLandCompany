var blackbox= [
    {
        image : "../Assests/mainpage/Maddison.jpg",
        maintext : "Madison",
        subtext : "La Quinta , California",
        weather : 230,
        windspeed : "10.3mph",
        suntemp : 44
    },
    {
        image : "../Assests/mainpage/BakersBay.jpg",
        maintext : "Baker's Bay",
        subtext : "Great Guana Cay, Bahamas",
        weather:100,
        windspeed : "22.5mph",
        suntemp : 45
    },
    {
        image : "../Assests/mainpage/mountaintop.jpg",
        maintext : "Mountaintop",
        subtext : "Cashiers, North Carolina",
        weather : 250,
        windspeed :"33.0mph",
        suntemp : 22
    },
    {
        image : "../Assests/mainpage/Mirabel-.jpeg",
        maintext : "Mirabel",
        subtext : "Scottsdale,Arizona",
        weather : 300,
        windspeed: "15.5mph",
        suntemp : 35
    },
    {
        image : "../Assests/mainpage/Vaquero.jpg",
        maintext : "Vaquero",
        subtext : "West Lake,Texas",
        weather : 320,
        windspeed : "12.2mph",
        suntemp : 38
    }
]

var index = 0;
function next(){
    index ++ ;
    changeBlackBox();
}

function prev(){
    index --;
    changeBlackBox();
}

function changeBlackBox(){
    if(index < 0) index = blackbox.length -1;
    if(index > blackbox.length ) index = 0 ;

    document.getElementById("black-box-img").src = blackbox[index].image;
    document.getElementById("main-text").innerHTML = blackbox[index].maintext;
    document.getElementById("sub-text").innerHTML = blackbox[index].subtext;
    document.getElementById("weather").innerHTML = blackbox[index].weather;
    document.getElementById("windspeed").innerHTML = blackbox[index].windspeed;
    document.getElementById("suntemp").innerHTML = blackbox[index].suntemp;
}