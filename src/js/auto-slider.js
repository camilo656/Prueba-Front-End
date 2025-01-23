
// Swiper
import Swiper from "swiper";
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/scss';
//import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const swiper = new Swiper('.clients-section .swiper', {
    loop: true,              
    modules: [Autoplay],
    autoplay: {
      delay: 1500,              
    },
    slidesPerView: 3,
    spaceBetween: 27,

    breakpoints: {
      926: {
        slidesPerView: 4,
        spaceBetween: 88,
      },

      1650: {
        slidesPerView: 5,
        spaceBetween: 146,
      }
    }

  });




