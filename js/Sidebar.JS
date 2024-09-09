$(document).ready(function(){

    $('.slick_parent').slick({
      autoplay: false,
   
      infinite: true,
      speed: 300,
      // cssEase: 'linear', 
    
      arrows: true,
      prevArrow: `.arrowLeft`,
      nextArrow: `.arrowRight`,
      centerMode: false,
      dots: false, 
    
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
      ]
    });
  
});




// let SEARCH = document.querySelector(".search");
// let SEARCH_OFFC = document.querySelector(".search_offc")

// let SEARCH_BOX = document.querySelector(".search_box");
// let CROSS = document.querySelector(".cross");
// let INPUT =document.querySelector(".input");

// SEARCH.addEventListener("click", ()=>{ 

//     SEARCH_BOX.classList.add("search_active");

//     if(SEARCH_BOX.classList.contains("search_active")){
//         INPUT.classList.add("input_active");
//     }else{
//         INPUT.classList.remove("input_active");
//     }

//     SEARCH_BOX.classList.remove("cross_active");
// });


// CROSS.addEventListener("click", ()=>{
//     SEARCH_BOX.classList.remove("search_active");

//     if(SEARCH_BOX.classList.contains("search_active")){
//         INPUT.classList.add("input_active");
//     }else{
//         INPUT.classList.remove("input_active");
//     }

//     SEARCH_BOX.classList.add("cross_active");
// });

//ffcanvas
// SEARCH_OFFC.addEventListener("click", ()=>{ 

//     SEARCH_BOX.classList.add("search_active");
  
//     if(SEARCH_BOX.classList.contains("search_active")){
//         INPUT.classList.add("input_active");
//     }else{
//         INPUT.classList.remove("input_active");
//     }
  
//     SEARCH_BOX.classList.remove("cross_active");
//   });
  //offcanvas