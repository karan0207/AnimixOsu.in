let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'


let swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nextbutton",
        prevEl: ".prevbutton",
    },
    loop: true,
});




let swiper2 = new Swiper(".anime-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
 
});



let swiper3 = new Swiper(".info-slider", {

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
let swiper4 = new Swiper(".home-slidermid", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7200,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".nexticon2",
        prevEl: ".previcon2",
    },
    loop: true,
});



let swiper5 = new Swiper(".upcoming-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".upnexticon",
        prevEl: ".upprev",
    },
    loop: true,
});

 // Get the button element by its ID
 var button = document.getElementById("heart");


 // Set a variable to keep track of whether the button has been clicked before
var clicked = true;
 

 // Add an event listener for the click event
 button.addEventListener("click", function() {
   // If the button has been clicked before, change the background color to white
   if (clicked) {
     button.style.backgroundColor = "pink";
     clicked = false;
     alert('Thanks for liking');
   }
   // Otherwise, change the background color to yellow
   else {
     button.style.backgroundColor = "red";
     clicked = true;
   }
 });
 

