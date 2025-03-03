var addbtn = document.querySelector(".btn-dark");
var bookbox = document.querySelector(".bookbox");

addbtn.addEventListener("click", () => {
    let cardbox = document.createElement("div")
    cardbox.setAttribute("class", "card text-bg-secondary mb-3")
    cardbox.setAttribute("style", "max-width: 18rem;")
    cardbox.innerHTML = "<div class='card-header'>Book Title</div> <div class='card-body'><h5 class='card-title'>Book Heading</h5><p class='card-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nisi perspiciatis voluptatum repellendus. Odit, obcaecati laudantium velit voluptas at ad?</p><button type='button' onclick='delbtn(event)' class='btn btn-danger'> Danger </button></div></div >"
    bookbox.append(cardbox)
});

function delbtn(event){
    event.target.parentElement.parentElement.remove();
}