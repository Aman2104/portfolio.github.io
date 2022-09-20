let links = document.getElementsByClassName("links")[0];
let lgbtn = document.getElementsByClassName("logIn")[0];
let container = document.getElementsByClassName("grid")[0];


function myFunction(x) {
    x.classList.toggle("change");
    links.classList.toggle("show");
    lgbtn.classList.toggle("showbtn");
    container.classList.toggle("transition");
}

let sharebtn = document.querySelector(".fa-share-alt");
let title = window.location.title;
let url1 = window.location.href;

sharebtn.addEventListener("click", () => {
    if (navigator.share) {
        navigator.share({
            title: `${title}`,
            url: `${url1}`
        }).then(() => {

        })
            .catch(error=>{
               
            })
    }
})

let daybtn = document.querySelector(".fa-sun-o");
let nightbtn = document.querySelector(".fa-moon-o");

let btns = document.querySelectorAll("button");

daybtn.addEventListener("click", ()=>{
    daybtn.classList.add("dis");
    nightbtn.classList.remove("dis");
    document.getElementsByTagName("body")[0].classList.remove("bg-dark")
    document.getElementsByTagName("body")[0].classList.add("bg-light")
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.add("bg-light")
        btns[i].classList.remove("bg-dark")
        
    }
})
nightbtn.addEventListener("click", ()=>{
    nightbtn.classList.add("dis");
    daybtn.classList.remove("dis");
    document.getElementsByTagName("body")[0].classList.add("bg-dark")
    document.getElementsByTagName("body")[0].classList.remove("bg-light")

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("bg-light")
        btns[i].classList.add("bg-dark")
        
    }
})