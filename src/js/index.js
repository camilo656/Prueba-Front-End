/////////////////////////
// IMPORT CSS
//////////////////////////

//////////////////////////
/////// MAIN CSS
//////////////////////////

import "../css/style.sass";
import "../css/main.scss";

//////////////////////////
/////// LIBRARIES CSS
//////////////////////////

//////////////////////////
// IMPORT LIBRARIES JS
//////////////////////////

/***
 ** @import ONLY IMPORT THE LIBRARY THAT IS GOING TO BE USED
 ***/

// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// Swiper
// import Swiper from "swiper";

//////////////////////////
// @class CLASS BLOCKS
//////////////////////////

class Header {
  constructor() {
    // Class, ID or any tag that help us init the app
    this.header = document.querySelector(".header");
    this.body = document.querySelector("body");
    this.start();
  }
  start() {
    if (this.header) {
      this.stickyTransparent();

      let hamburguer = this.header.querySelector(".js-hamburger");
      let menu = this.header.querySelector(".js-menu");

      hamburguer.addEventListener("click", () => {
        menu.classList.toggle("is-active");
        this.header.classList.toggle("is-active");
        this.body.classList.toggle("hidde");
      });
    }
  }
  stickyTransparent() {
    window.onscroll = () => {
      const trigger = this.header.offsetHeight;
      if (window.scrollY > trigger - this.header.offsetHeight / 1) {
        this.header.classList.add("is-sticky");
      } else {
        this.header.classList.remove("is-sticky");
      }
    };
  }
}

class FadeInOnScroll {
  constructor(selector, options = {}) {
    this.elements = document.querySelectorAll(selector);
    this.options = Object.assign(
      {
        opacityStart: 0,
        yStart: 50,
        opacityEnd: 1,
        yEnd: 0,
        duration: 1.5,
        ease: "power2.out",
        threshold: 0.5,
      },
      options
    );
    this.initObservers();
  }

  initObservers() {
    this.elements.forEach((element) => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.animate(entry.target);
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: this.options.threshold }
      );

      observer.observe(element);
    });
  }

  animate(element) {
    gsap.fromTo(
      element,
      { opacity: this.options.opacityStart, y: this.options.yStart },
      {
        opacity: this.options.opacityEnd,
        y: this.options.yEnd,
        duration: this.options.duration,
        ease: this.options.ease,
      }
    );
  }
}

////////////////////
// Run apps
////////////////////

window.addEventListener("DOMContentLoaded", (e) => {
  new Header();
});

////////////////////
// Copyright
////////////////////
window.SayMyName = function () {
  console.log(
    `%c
                                                        
                MADE WITH TOO MUCH SKILLS:              
                                                        
                                                        
       333333    666    00000  PPPPPP  MM    MM IIIII   
          3333  66     00   00 PP   PP MMM  MMM  III    
         3333  666666  00   00 PPPPPP  MM MM MM  III    
           333 66   66 00   00 PP      MM    MM  III    
       333333   66666   00000  PP      MM    MM IIIII   
                                                        
                                                        
                    https://360pmi.com/                 
`,
    "background: #e8404b; color: white"
  );
};

////////////////////
// IE Detecter
////////////////////

/* Sample function that returns boolean in case the browser is Internet Explorer*/

const isIE = () => {
  var ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

  return is_ie;
};
const checkIeCookie = (name) => {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));
  return decodeURI(dc.substring(begin + prefix.length, end));
};

/* Create an alert to show if the browser is IE or not */
if (isIE() && !checkIeCookie("ie_cookie")) {
  const container = document.createElement("div");
  container.classList.add("ie-notification");

  container.innerHTML = `
      <p>Your web browser (Internet Explorer) is out of date. Please update your browser for more security, speed, and for the best experience on this site.</p>
      <div>
      <div>
        <a href="https://browsehappy.com/" target="_blank">Update my browser</a>
        <button class="ignore-update">Ignore</button>
      </div>
    `;
  document.body.appendChild(container);

  const ignoreUpdate = document.querySelector(".ignore-update");
  ignoreUpdate.addEventListener("click", (e) => {
    var d = new Date();

    d.setTime(d.getTime() + 1 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = "ie_cookie" + "=" + 1 + ";" + expires + ";path=/";
    container.style.display = "none";
  });
}

////////////////////
// Keyboard focus
////////////////////

function keyboardFocus(e) {
  if (e.keyCode === 9) {
    // Tab key
    document.documentElement.classList.add("keyboard-focus");
  }

  document.removeEventListener("keydown", keyboardFocus, false);
}

document.documentElement.classList.remove("no-js");
document.addEventListener("keydown", keyboardFocus, false);
