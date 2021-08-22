var blackbox= [
    {        
        maintext : "This property company ups the Ante with Luxury and Sustainability.",
        date : "Newyorktimes | November 21 2021"
    
    },
    {       
        maintext : " Sustainability.",
        date : "Times | jan 21 2021"
    
    },
    {       
        maintext : " Ante with Luxury and Sustainability.",
        date : "Newyork | may 21 2021"
    
    },
    {        
        maintext : "This property company ups the Ante with Luxury and Sustainability.",
        date : "delhi | august 21 2021"
    
    },
    {        
        maintext : " Luxury and Sustainability.",
        date : "Mumbai | November 21 2021"
    
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
    document.getElementById("text-sec3").innerHTML = "Luxury and Sustainability.";
    document.getElementById("sec3-date").innerHTML = blackbox[index].date;
  }