var blackbox= [
    {        
        maintext : "This property company ups the Ante with Luxury and Sustainability.",
        date : "November 21 2021",
        magazine:"Newyork times"
    
    },
    {       
        maintext : " Sustainability.",
        date : "jan 21 2021",
        magazine:" times"
    
    },
    {       
        maintext : " Ante with Luxury and Sustainability.",
        date : "may 21 2021",
        magazine:"Newyork "
    
    },
    {        
        maintext : "This property company ups the Ante with Luxury and Sustainability.",
        date : "august 21 2021",
        magazine:"delhi"
    
    },
    {        
        maintext : " Luxury and Sustainability.",
        date : "November 21 2021",
        magazine:"sdefr"
    
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
    document.getElementById("main-text").innerHTML = blackbox[index].maintext;
    document.getElementById("sub-text").innerHTML = blackbox[index].date;
    document.getElementById("weather").innerHTML = blackbox[index].magazine;

}