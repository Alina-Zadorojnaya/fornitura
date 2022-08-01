
  $(function(){

    $('.header__burger').on('click', function(){
      $('.header__burger,.menu__list').toggleClass('active');
    });
   
    $('.info__slider').slick({
     
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev info__prev-btn"><img src="images/svg/arr-right.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next info__next-btn"><img src="images/svg/arr-left.svg" alt=""></button>'
        
      });
      $('.advances__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev prev-btn"><img src="images/svg/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next next-btn"><img src="images/svg/arrow-right.svg" alt=""></button>',
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
            
            }
          }
        ]
        
      });

      var mixer = mixitup('.category__list');

  });

 