const coursebox = document.querySelector(".scrollbox")

function leftscroll() {
    coursebox.scrollBy({ left: -50, behavior: "smooth" });
}

function rightscroll() {
    coursebox.scrollBy({ left: 50, behavior: "smooth" });
}