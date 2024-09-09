//classic
$(document).ready(function(){

    $('.arrahman_parent').slick({
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