searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');
    
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

 if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
 }else{
    document.querySelector('.header .header-2').classList.remove('active');
 }

}

window.onload = () =>{

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
      autoplay: {
             delay:9500,
           disableOnInteraction: false,
      },
         breakpoints: {
            0: {
                slidesPerView: 1,
            },
             768: {
                slidesPerView: 2,
             },
           1024: {
                 slidesPerView: 3,
           },
         },
    });   

    let currentSlide = 0;

        function showSlide(index) {
            const slider = document.getElementById('slider');
            const slideWidth = document.querySelector('.slide').offsetWidth;
            slider.style.transform = `translateX(-${index * slideWidth}px)`;
            currentSlide = index;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % document.querySelectorAll('.slide').length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
            showSlide(currentSlide);
        }

        // Automatic slide change every 3 seconds
        setInterval(nextSlide, 3000);

// var swiper = new Swiper(".featured-slider", {
//     spaceBetween: 10,
//     loop:true,
//     centeredSlides: true,
//     autoplay: {
//         delay:9500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextE1: ".swiper-button-next",
//         prevE1: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//             sliderPerView: 1,
//         },
//         450: {
//             sliderPerView: 2,
//         },
//         768: {
//             sliderPerView: 3,
//         },
//         1024: {
//             sliderPerView: 4,
//         },
//     },
// });