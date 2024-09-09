
let SEARCH = document.querySelector(".search");
let SEARCH_OFFC = document.querySelector(".search_offc")

let SEARCH_BOX = document.querySelector(".search_box");
let CROSS = document.querySelector(".cross");
let INPUT =document.querySelector(".input");

SEARCH.addEventListener("click", ()=>{ 

    SEARCH_BOX.classList.add("search_active");

    if(SEARCH_BOX.classList.contains("search_active")){
        INPUT.classList.add("input_active");
    }else{
        INPUT.classList.remove("input_active");
    }

    SEARCH_BOX.classList.remove("cross_active");
});




//

CROSS.addEventListener("click", ()=>{
    SEARCH_BOX.classList.remove("search_active");

    if(SEARCH_BOX.classList.contains("search_active")){
        INPUT.classList.add("input_active");
    }else{
        INPUT.classList.remove("input_active");
    }

    SEARCH_BOX.classList.add("cross_active");
});


//ffcanvas
SEARCH_OFFC.addEventListener("click", ()=>{ 

  SEARCH_BOX.classList.add("search_active");

  if(SEARCH_BOX.classList.contains("search_active")){
      INPUT.classList.add("input_active");
  }else{
      INPUT.classList.remove("input_active");
  }

  SEARCH_BOX.classList.remove("cross_active");
});
//offcanvas

//slick start

$(document).ready(function(){
    $('.test_parent_banner').slick({
        arrows: false,
        dots: true,
        dotsClass: 'slick_dot container',
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$('.slick_parent_4th').slick({
    dots: false, 
    //dotsClass: 'slick_dot_4th container',
    prevArrow: '.arrow_left',
    nextArrow: '.arrow_right',

    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          dots: true,
          dotsClass: 'slick_dot_4th container',
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          dotsClass: 'slick_dot_4th container',
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});


//6th slick
$('.slick_parent_6th').slick({
  autoplay: true,
  autoplaySpeed: 2000,

  arrows: false,
  dots: true, 
  dotsClass: 'slick_dot_6th',
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
       
      }
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//slick end


//6th slick about
$('.slick_parent_ab_6th').slick({
  autoplay: true,
  autoplaySpeed: 2000,

  arrows: true,
  prevArrow: '.left_arrow_ab_6th',
  nextArrow: '.right_arrow_ab_6th',
  dots: false, 
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
       
      }
    },
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//slick end about


// tooltips stsrt
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//tooltip end

//===login strt===
let LOGINbACKGROUND = document.querySelector(".login_bground");
let logactive = document.querySelector(".login_box");
let LOGIN_CLOSE = document.querySelector(".log_cloce");
let USER = document.querySelector(".user");



USER.addEventListener("click", function(){
    LOGINbACKGROUND.style.display = 'flex';
    logactive.classList.add('login_box_active');
});



LOGIN_CLOSE.addEventListener("click", function(){
    LOGINbACKGROUND.style.display = 'none';
    logactive.classList.remove('login_box_active');
});

//for mobile 
let MBLPROFILE = document.querySelector('#MBL_profile');
     
    MBLPROFILE.addEventListener("click", function(){
        LOGINbACKGROUND.style.display = 'flex';
        logactive.classList.add('login_box_active');
    })
//for mobile end


let PASSWORD = document.querySelector("#password");
let SHOW = document.querySelector(".show");
let HIDE = document.querySelector(".hide");

SHOW.addEventListener("click", function(){
    PASSWORD.type = "text";
    HIDE.style.display = "block";
    SHOW.style.display = "none";
});
HIDE.addEventListener("click", function(){
    PASSWORD.type = "password";
    SHOW.style.display = "block";
    HIDE.style.display = "none";
});

//===login end===



//6TH sec timer
$(function(){


  $(".timer_6th")
  .countdown("2025/01/01", function(event) {

    $(`.day`).html(
      event.strftime('%D')
    );

    $(`.hour`).html(
      event.strftime('%H')
    );

    $(`.min`).html(
      event.strftime('%M')
    );

    $(`.seond`).html(
      event.strftime('%S')
    );

  });


})
//6TH sec timer end


//8th sec 
$('.slick_parent_8th').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 1000,
  // cssEase: 'linear', 

  arrows: false,
  dots: true, 
  dotsClass: 'slick_dot_8th',
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

//8th end

//7th sec  about
$('.slick_parent_4th_ab').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 1000,
  // cssEase: 'linear', 

  arrows: false,
  dots: true, 
  dotsClass: 'slick_dot_ab',
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
       
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//8th end about


//pro-detail
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  autoplay: true,
  autoplaySpeed: 1500,

  prevArrow: `.arroleft`,
  nextArrow: `.arroRightt`,

  dots:  false,
  centerMode: true,
  focusOnSelect: true
});



//pro-qnt
let mynas = document.querySelector('.mynas');
let pilas = document.querySelector('.pilas');

let text = document.querySelector('.text_qnt');


//pro-qntend



$('.detail_row').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  speed: 300,
  // cssEase: 'linear', 

  arrows: true,
  prevArrow: '.lst_arroleft',
  nextArrow: '.lst_arroRightt',
  centerMode: true,
  dots: false, 

  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//pro-detail end


//checkbox


let INCREASE = document.querySelectorAll(".pilas");
let DECREASE = document.querySelectorAll(".mynas");

let duck = document.querySelectorAll(".jkxcf");





let Q = 0;
let q = 1;

INCREASE[0].addEventListener("click", function(){
  Q++;
  duck[0].innerText = q + Q;
});


DECREASE[0].addEventListener("click", function(){
  if(Q > 1){
    Q--;
    duck[0].innerText = Q;
  } else{
    alert('Stop...!! You have to buy atleast 1 pice');
  }
});




INCREASE[1].addEventListener("click", function(){
  Q++;
  duck[1].innerText = q + Q;
});


DECREASE[1].addEventListener("click", function(){
  if(Q > 1){
    Q--;
    duck[1].innerText = Q;
  } else{
    alert('Stop...!! You have to buy atleast 1 pice');
  }
});





// INCREASE[2].addEventListener("click", function(){
//   Q++;
//   duck[1].innerText = q + Q;
// });


// DECREASE[2].addEventListener("click", function(){
//   if(Q > 1){
//     Q--;
//     duck[2].innerText = Q;
//   } else{
//     alert('Stop...!! You have to buy atleast 1 pice');
//   }
// });



// document.addEventListener("DOMContentLoaded", function() {
//   const NEWSLATTER = document.querySelector(".newsLatterBody");
//   NEWSLATTER.classList.add('.show');
// })


//checkbox END


