$(window).resize(function(){
  $(".full-height").height($(window).height());
});
$(window).load(function(){
  $("#status").fadeOut();
  $("#preloader").delay(1000).fadeOut('slow');
});
$(document).ready(function() {

  // DRAG SLIDER -----------------------
  var dragFolio = $("#spo-drag-carousel");
  var dragFolioRelated = $("#spo-drag-carousel-related");
  var dragClients = $(".spo-clients-list");
  var dragBlog = $(".spo-blog-carousel-articles");
 
  dragFolio.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1400,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  dragFolioRelated.owlCarousel({
      items : 5, //10 items above 1000px browser width
      itemsDesktop : [1400,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });

  dragClients.owlCarousel({
      items : 5, //10 items above 1000px browser width
      autoPlay: true,
      itemsDesktop : [1000,5], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,3], // betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
  });
 
  // Custom Navigation Events 
  $(".next").click(function(){
    dragFolio.trigger('owl.next');
  })
  $(".prev").click(function(){
    dragFolio.trigger('owl.prev');
  })
  $(".next").click(function(){
    dragFolioRelated.trigger('owl.next');
  })
  $(".prev").click(function(){
    dragFolioRelated.trigger('owl.prev');
  });

  // PORTFOLIO LIGHTBOX -----------------------
  $('.spo-lightbox a').magnificPopup({ 
    type: 'image'
  });
  $('.spo-video-button').magnificPopup({ 
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false 
  });
  // TOGGLE -----------------------
  (function($) {
         $('.toggle dd').hide();
         $('.toggle dt').click(function(){
            if ($(this).hasClass('active')) {
                 $(this).removeClass('active');
                 $(this).next().slideUp(300);
            } else {
                 $(this).addClass('active');
                 $(this).next().slideDown(300);
            }
            return false;
         });
  })(jQuery);
  
  // TABS  ---------------------------------
  $('.tabs').tabs();

  // COUNTER  ------------------------------
  $('.timer').countTo();

  // ACCORDION  ----------------------------
  $('.accordion').accordion();

  // PROGRESS BAR --------------------------
  $('.qvs-skill-percent').each(function(){
    var progressPercent = $(this).data('percent');

    $(this).animate({width: progressPercent+'%'});
    $(this).prev().append(' '+progressPercent+'%');
  });
  /* ---------------------------------------------
   Height 100%
   --------------------------------------------- */
  $(".full-height").height($(window).height());

  // HOVER EFFECTS -----------------------

  //PORTFOLIO
  $(".spo-portfolio-item, .spo-portfolio-drag-item").hover(function(){
      $(this).children(".spo-portfolio-item-caption").stop().animate({opacity:1},200);
      $(this).children(".spo-cap-bg").stop().animate({opacity:.9},200);
  }, function() {
      $(this).children(".spo-portfolio-item-caption").stop().animate({opacity:0},200);
      $(this).children(".spo-cap-bg").stop().animate({opacity:0},200);
  });

  // RESPONSIVE TRIGGER --------------------
  $('.spo-responsive-trigger').toggle(function(){
    $('.spo-responsive-navigation ul').slideDown(300);
    },
    function(){$('.spo-responsive-navigation ul').slideUp(300);
  });
  // BUTTON STYLE SWITCHER --------------------
  $('.button-switcher').toggle(function(){
    $('.style-switcher').stop().animate({left:0},200);
    },
    function(){$('.style-switcher').stop().animate({left:"-50px"},200);
  });

  // LOCAL SCROLL --------------------------
  $.localScroll({
    target:'.body',
    offset: {left: 0, top: -75}
  });

  // DROPDOWN MENU  --------------------------
  $('.spo-primary-navigation li').children('ul').parent().addClass('dropped');

  // BACK TO TOP  --------------------------
  $('#backtoTop').click(function(){
    $("html, body").animate({scrollTop:0},'slow');
    return false;
  });

  // FLEXSLIDER -----------------------
    $('.spo-quote-slider-trans').flexslider({
      animation: "fade",
      directionNav: false
    });
    $('.spo-blog-article-gallrey').flexslider({
      animation: "slide",
      controlNav: false
    });
    $('.spo-blog-masonry-article-gallrey').flexslider({
      animation: "slide",
      controlNav: false
    });
    $('.spo-project-media-gallrey').flexslider({
      animation: "slide",
      controlNav: false
    });
  // REVOLUTION SLIDER ---------------------------------------
  jQuery('.banner').show().revolution(
    {
      dottedOverlay:"none",
      delay:8000,
      startwidth:1170,
      startheight:700,
      hideThumbs:200,
      
      thumbWidth:100,
      thumbHeight:50,
      thumbAmount:5,
      
      hideTimerBar: "on",
      navigationType:"bullet",
      navigationArrows:"solo",
      navigationStyle:"preview4",
      
      touchenabled:"on",
      onHoverStop:"on",
      
      swipe_velocity: 0.7,
      swipe_min_touches: 1,
      swipe_max_touches: 1,
      drag_block_vertical: false,
                 
      parallax:"mouse",
      parallaxBgFreeze:"on",
      parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
                  
      keyboardNavigation:"off",
      
      navigationHAlign:"center",
      navigationVAlign:"bottom",
      navigationHOffset:0,
      navigationVOffset:20,

      soloArrowLeftHalign:"left",
      soloArrowLeftValign:"center",
      soloArrowLeftHOffset:20,
      soloArrowLeftVOffset:0,

      soloArrowRightHalign:"right",
      soloArrowRightValign:"center",
      soloArrowRightHOffset:20,
      soloArrowRightVOffset:0,
          
      shadow:0,
      fullWidth:"off",
      fullScreen:"on",

      spinner:"spinner4",
      
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,

      shuffle:"off",
      
      autoHeight:"off",           
      forceFullWidth:"off",           
                  
                  
                  
      hideThumbsOnMobile:"off",
      hideNavDelayOnMobile:1500,            
      hideBulletsOnMobile:"off",
      hideArrowsOnMobile:"off",
      hideThumbsUnderResolution:0,
      
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      startWithSlide:0,
      fullScreenOffsetContainer: ".header"  
    });
    // -----------------------------
    new WOW().init();
});


$(window).scroll(function() {
  // HEADER TRANSPARENT SCROLL
  if ($(document).scrollTop() >= 90){  
    $('.home-t-h header').removeClass("transparent");
    if($('.home-t-h header').hasClass('white-header')){
      $('.spo-logo').addClass('black-logo');
    }
  } 
  else{
    $('.home-t-h header').addClass("transparent");
  }

  // parallax effect --------------------
  $('.intro-2').parallax("50%", 0.1);
  $('.intro-3').parallax("50%", 0.1);
  $('.promo').parallax("50%", 0.1);
  $('.contact').parallax("50%", 0.1);
  $('.ads').parallax("50%", 0.1);
  $('.quote').parallax("50%", 0.1);
  $('.quote-two').parallax("50%", 0.1);
  $('.spo-counter').parallax("50%", 0.1);
  $('.in-touch').parallax("50%", 0.1);
  $('.spo-intro-page-section').parallax("50%", 0.1);
  //SELECTED MENU SCROLL --------------------
  if($('body').hasClass('home')){
    var currentNode = null;
    $('.section-area').each(function(){
      var currentId = jQuery(this).attr('id');    
      if(jQuery(window).scrollTop() >= jQuery('#'+currentId).offset().top - 95)
      {
        currentNode = currentId;
      }
    });
    $('.spo-primary-navigation li, .responsive-navigation li').removeClass('selected').find('a[href="#'+currentNode+'"]').parent().addClass('selected');
  }
});
$(window).load(function(){
  // MASONRY BLOG -----------------------
  var $blog = $('.spo-blog-masonry-list')
  $blog.imagesLoaded(function(){
    $blog.masonry({
      itemSelector : '.spo-blog-masonry-list li',
    });
  });
  // ISOTOPE --------------------
  var $container = $('.spo-portfolio-container');
  $container.isotope({
    itemSelector : '.spo-portfolio-item',
    layoutMode : 'fitRows',
    // disable resizing
    resizable: false,
    // set columnWidth to a percentage of container width
    masonry: {
      columnWidth: $container.width() / 12
    },
   });
  
  // update columnWidth on window resize
  $(window).resize(function(){
    $container.isotope({
      // set columnWidth to a percentage of container width
      masonry: {
        columnWidth: $container.width() / 12
      }
    });
  });
  $('.spo-portfolio-filter a').click(function(){
       var selector = $(this).attr('data-filter');
       $container.isotope({
         filter: selector,
         animationOptions: {
           duration: 750,
           easing: 'linear',
           queue: false,
         }
       });
       return false;
     });

    var $optionSets = $('.spo-portfolio-filter'),
    $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {

      var $this = $(this);
      // don't proceed if already selected
      if ( $this.hasClass('current-filter') ) {
        return false;
      }
      var $optionSet = $this.parents('.spo-portfolio-filter');
      $optionSet.find('.current-filter').removeClass('current-filter');
      $this.addClass('current-filter');

      // make option object dynamically, i.e. { filter: '.my-filter-class' }
      var options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-filter');
      // parse 'false' as false boolean
      value = value === 'false' ? false : value;
      options[ key ] = value;
      if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
      } else {
        // otherwise, apply new options
        $container.isotope( options );
      }
      
      return false;
    });
});
