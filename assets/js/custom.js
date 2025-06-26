jQuery('.projects-slider.top').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 10000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 0,
    // variableWidth: true,
    // swipeToSlide: true,
    pauseOnHover:false,
    pauseOnFocus:false,
    waitForAnimate:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  jQuery('.projects-slider.bottom').slick({
    rtl:true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 10000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '120px',
    autoplay: true,
    autoplaySpeed: 0,
    // variableWidth: true,
    // swipeToSlide: true,
    pauseOnHover:false,
    pauseOnFocus:false,
    waitForAnimate:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '80px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});

jQuery('.testimonial-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover:false,
  pauseOnFocus:false,
  waitForAnimate:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
jQuery('.projects-tabs-wrapper .nav-link').click(function(){
  jQuery('.projects-slider').slick('pause')
  setTimeout(()=>{
    jQuery('.projects-slider').slick('refresh');
    jQuery('.projects-slider').slick('slickPlay');
  },400)
})

gsap.from(".hero-back-img",{
  scale:0,
  duration:1,
  delay:1,
})
gsap.from(".hero-front-img",{
  opacity:0,
  duration:1,
  delay:3,
})
gsap.from(".hero-back-img",{
  rotate:30,
  duration:20,
  delay:3,
  repeat:-1,
  yoyo:true
})
gsap.from(".hero-front-img",{
  rotate:10,
  duration:5,
  delay:4,
  repeat:-1,
  yoyo:true
})
gsap.from(".hero-content-wrapper small",{
  y:20,
  opacity:0,
  duration:1,
  delay:1.4,
})
gsap.from(".hero-content-wrapper h1",{
  y:20,
  opacity:0,
  duration:1,
  delay:1.8,
  stagger:.2,
})
gsap.from(".hero-content-wrapper .hero-text",{
  y:20,
  opacity:0,
  duration:1,
  delay:1.8,
})
gsap.from(".hero-content-wrapper p",{
  y:20,
  opacity:0,
  duration:1,
  delay:2.6,
})
gsap.to(".hero-btn",{
  y:0,
  opacity:1,
  duration:1,
  delay:2.9,
})

function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if (jQuery(window).scrollTop() > 500) {
    jQuery(".backToTopBtn").addClass("active");
  } else {
    jQuery(".backToTopBtn").removeClass("active");
  }
}
jQuery(function () {
  // show and hide btn
  scrollTop();
  jQuery(window).on("scroll", scrollTop);

  // body scroll on btn click
  // jQuery(".backToTopBtn").click(function () {
  //   jQuery("html, body").animate({ scrollTop: 0 }, 1);
  
  //   return false;
  // });
});