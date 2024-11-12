//selecting popbox popoverlay and button+

var popupoverlay=document.querySelector(".popoverlay")
var popbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("addpopbtn")

addbutton.addEventListener('click',function()
{
    popbox.style.display="block"
    popupoverlay.style.display="block"
})

//select cancel button

var cancelpopup=document.getElementById("cancelbook")
cancelpopup.addEventListener('click',function(event)
{
   event.preventDefault()
   popupoverlay.style.display="none"
   popbox.style.display="none"
    
})

//select container,addbook,booktitleinput,bookauthorinput,bookdes

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitleinput=document.getElementById("booktitleinput")
var bookauthorinput=document.getElementById("bookauthorinput")
var bookdes=document.getElementById("bookdesinput")

addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
        <h5>${bookauthorinput.value}</h5>
        <p>${bookdes.value}</p>
        <button onclick="deletebook(event)">Delete</button>` 
    container.append(div)
    popupoverlay.style.display="none"
    popbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}