var addbtn = document.querySelector(".addbtn");
var bookbox = document.querySelector(".bookbox")
var addpage = document.querySelector(".addbookpage")
var canlbtn = document.querySelector(".canlbtn")
var subbtn = document.querySelector(".subbtn")

addbtn.addEventListener("click",()=>{
    addpage.style.display = "flex";
});
canlbtn.addEventListener("click",()=>{
    addpage.style.display = "none";
});
subbtn.addEventListener("click",()=>{
    var bkhead = document.querySelector(".bkhead").value
    var bkauthor = document.querySelector(".bkauth").value
    var bksum = document.querySelector(".bksum").value
    let cardbox = document.createElement("div")
    cardbox.setAttribute("class", "card text-bg-secondary mb-3")
    cardbox.setAttribute("style", "max-width: 18rem;")
    cardbox.innerHTML = "<div class='card-header'>"+bkhead+"</div> <div class='card-body'><h5 class='card-title'>"+bkauthor+"</h5><p class='card-text'>"+bksum+"</p><button type='button' onclick='delbtn(event)' class='btn btn-danger'> Danger </button></div></div >"
    bookbox.append(cardbox)

    document.querySelector(".bkhead").value = "";
    document.querySelector(".bkauth").value = "";
    document.querySelector(".bksum").value = "";
    addpage.style.display = "none";
});



    


function delbtn(event){
    event.target.parentElement.parentElement.remove();
}