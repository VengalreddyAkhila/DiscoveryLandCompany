 
   var whiteboxcontents= [
       {
           heading: "Costa Tera<br>Discovery's 23rd property",
           para:"Discovery land company the world leading<br>developer of luxury private residential communities,<br>clubs,and resorts ,has announced its 23rd propert and <br>first in europe."
       },
       {
           heading:"James island<br>Dicovery's Newest<br>proeprty ",
           para:"Ajax is not a technology, but rather a programming<br>concept.HTML and CSS can be used in combination<br>to mark up and style information The webpage can<br>be modified by JavaScript to dynamically display and allow<br>the user to interact with the new"
       },
       {
           heading:"Troubandar To Open<br> Golf Course Fall 2019" ,
           para:"Since then, however, there have been a number <br>of developments in the technologies used in an Ajax application,<br>and in the definition of the term Ajax itself. XML is no<br>longer required for data interchange and,therefore, XSLT is<br>no longerrequired for the manipulation of data."
       }
   ]
   var index = 0;
function next(){
    index ++ ;
    changeWhiteBox();
}
function prev(){
    index --;
    changeWhiteBox();
}
function changeWhiteBox(){
    if(index < 0) index = whiteboxcontents.length -1;
    if(index >  whiteboxcontents.length ) index = 0 ;    
    document.getElementById("newstext").innerHTML =  whiteboxcontents[index].heading;
    document.getElementById("newspara").innerHTML =  whiteboxcontents[index].para;
}
   