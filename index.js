let links = document.getElementsByClassName("links")[0];

let container = document.getElementsByClassName("grid")[0];

var i=0;
function myFunction(x) {

    x.classList.toggle("change");
    links.classList.toggle("show");
    container.classList.toggle("transition");
    
    if(i>0){
        links.classList.toggle("hide");
    }
    i++
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

let daybtn = document.querySelector(".fa-sun");
let nightbtn = document.querySelector(".fa-moon");

let btns = document.querySelectorAll("button");

daybtn.addEventListener("click", ()=>{
    daybtn.classList.add("dis");
    nightbtn.classList.remove("dis");
    document.getElementsByTagName("body")[0].classList.remove("bg-dark")
    document.getElementsByTagName("body")[0].classList.add("bg-light")
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.add("bg-light")
        btns[i].classList.add("neonChange")
        btns[i].classList.remove("bg-dark")
        document.getElementsByClassName("pro")[0].classList.add("proLight")
        
    }
})
nightbtn.addEventListener("click", ()=>{
    nightbtn.classList.add("dis");
    daybtn.classList.remove("dis");
    document.getElementsByTagName("body")[0].classList.add("bg-dark")
    document.getElementsByTagName("body")[0].classList.remove("bg-light")

    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("bg-light")
        btns[i].classList.remove("neonChange")
        btns[i].classList.add("bg-dark")
        document.getElementsByClassName("pro")[0].classList.remove("proLight")
        
    }
})




// Animation
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};