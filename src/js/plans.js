

import Swiper from 'swiper';  // Import the Swiper core
// import 'swiper/css';  // Import the core Swiper CSS
// import 'swiper/css/pagination';  // Import the pagination module CSS
// import 'swiper/css/navigation';  // Import the navigation module CSS

// // // Import individual modules
// // import { Pagination, Navigation } from 'swiper';

// // // Register the modules
// Swiper.use([Pagination, Navigation]);

import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
//import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".pricing-container .swiper", {
      modules: [Pagination],
      direction: "horizontal",
      //loop: true,               // Enable looping
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1060: {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: false,
        },
      },
    });
  });
  