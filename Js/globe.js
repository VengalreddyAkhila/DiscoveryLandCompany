var blackBoxContents = [
    {
        image : "../Assests/mainpage/Maddison.jpg",
        maintext : "Madison",
        subtext : "La Quinta , California"
    },
    {
        image : "../Assests/mainpage/BakersBay.jpg",
        maintext : "Baker's Bay",
        subtext : "Great Guana Cay, Bahamas"
    },
    {
        image : "../Assests/mainpage/mountaintop.jpg",
        maintext : "Mountaintop",
        subtext : "Cashiers, North Carolina"
    },
    {
        image : "../Assests/mainpage/Mirabel-.jpeg",
        maintext : "Mirabel",
        subtext : "Scottsdale,Arizona"
    },
    {
        image : "../Assests/mainpage/Vaquero.jpg",
        maintext : "Vaquero",
        subtext : "West Lake,Texas"
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
    if(index < 0) index = blackBoxContents.length -1;
    if(index > blackBoxContents.length ) index = 0 ;

    document.getElementById("black-box-img").src = blackBoxContents[index].image;
    document.getElementById("main-text").innerHTML = blackBoxContents[index].maintext;
    document.getElementById("sub-text").innerHTML = blackBoxContents[index].subtext;
}