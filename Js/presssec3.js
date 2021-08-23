let presscontents = [
    {
        maintext: "This property company ups the Ante with Luxury and Sustainability",
        date: "Newyork times | November 21 2021",
        subtext: "Where sun sand to be <br> discoverd in land",
        magazine: "Brazil | January 30 1997",
        maintext1: "This property company ups the Ante <br>with Luxury and Sustainability",
        date1: "delhi | august 21 2021",
        subtext1: "Discovery land company",
        magazine1: "Germany | March 11 1999"

    },
    {
        maintext: " Sustainability",
        date: "Times | jan 21 2021",
        subtext: "No longer waiting for retirement",
        magazine: "Norway | October 30 2000",
        maintext1: " Luxury and Sustainability",
        date1: "Mumbai | November 21 2021",
        subtext1: "Sustainability",
        magazine1: "Austarlia | june 30 2012",

    },
    {
        maintext: " Ante with Luxury and Sustainability",
        date: "Newyork | may 21 2021",
        subtext: "For many discovery had lead <br> to pandameic lead",
        magazine: "Canda | september 21 2023",
        maintext1: "This property company ups the Ante <br>with Luxury and Sustainability",
        date1: "delhi | august 21 2021",
        subtext1: "Discovery land company",
        magazine1: "Germany | March 11 1999"
    },
    {
        maintext: "This property company ups the Ante <br>with Luxury and Sustainability",
        date: "delhi | august 21 2021",
        subtext: "Discovery land company",
        magazine: "Germany | March 11 1999",
        maintext1: "This property company ups the Ante with Luxury and Sustainability",
        date1: "Newyork times | November 21 2021",
        subtext1: "Where sun sand to be <br> discoverd in land",
        magazine1: "Brazil | January 30 1997"

    },
    {
        maintext: " Luxury and Sustainability",
        date: "Mumbai | November 21 2021",
        subtext: "Sustainability",
        magazine: "Austarlia | MAy 30 2012",
        maintext1: " Sustainability",
        date1: "Times | jan 21 2021",
        subtext1: "No longer waiting for retirement",
        magazine1: "Norway | Feb 30 2000"

    }
]
let index = 0;
function next() {
    index++;
    changetext();
}
function prev() {
    index--;
    changetext();
}
function changetext() {
    if (index < 0) index = presscontents.length - 1;
    if (index >= presscontents.length) index = 0;

    document.getElementById("image1").innerHTML = presscontents[index].maintext;
    document.getElementById("picture1").innerHTML = presscontents[index].date;
    document.getElementById("image2").innerHTML = presscontents[index].subtext;
    document.getElementById("picture2").innerHTML = presscontents[index].magazine;
    document.getElementById("image3").innerHTML = presscontents[index].maintext1;
    document.getElementById("picture3").innerHTML = presscontents[index].date1;
    document.getElementById("image4").innerHTML = presscontents[index].subtext1;
    document.getElementById("picture4").innerHTML = presscontents[index].magazine1;
}
