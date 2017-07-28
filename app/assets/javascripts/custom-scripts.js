(function($) {
    
  'use strict';


  /**
   * =====================================
   * Function for windows height and width      
   * =====================================
   */
  function windowSize( el ) {
    var result = 0;
    if("height" == el)
        result = window.innerHeight ? window.innerHeight : $(window).height();
    if("width" == el)
      result = window.innerWidth ? window.innerWidth : $(window).width();

    return result; 
  }


  /**
   * =====================================
   * Function for email address validation         
   * =====================================
   */
  function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  };


  /**
   * =====================================
   * Function for windows height and width      
   * =====================================
   */
  function styleControll() {
  if( windowSize( 'width' ) >= 768 ) 
      $('body').removeClass('mobile').addClass('no-mobile');
    else
      $('body').removeClass('no-mobile').addClass('mobile');
  }


  $(window).on('resize', function() {

    styleControll();

  });



  $(document).on('ready', function() {

    styleControll();


    /**
     * ================================
     *  BACKGROUND SLIDER        
     * ================================= 
     */
    if( $('.bg-slider').length ) {
      $.vegas('slideshow', {
        delay:7000,
        backgrounds:[
          { src:'../../assets/images/backgrounds/bg1.jpg', fade:1000 },
          { src:'../../assets/images/backgrounds/bg2.jpg', fade:1000 },
          { src:'../../assets/images/backgrounds/bg3.jpg', fade:1000 },
          { src:'../../assets/images/backgrounds/bg4.jpg', fade:1000 }
        ]
      });
    }




    /**
     * ===============================
     * Button Innet HTML code Import
     * ===============================
     */
    $('.btn-js').each( function() {
      var btnText = $(this).html();
      $(this).append( '<span class="btn-show"><span class="btn-text">' + btnText + '</span></span>\
                     <span class="btn-hide"><span class="btn-text">' + btnText + '</span></span>' );
    });


    /**
     * =======================================
     * Slider
     * =======================================
     */
    $('.content-slider .click').on('click', function(event) {
      event.preventDefault();
      var parentPosition = $(this).closest('.content-slider'),
          actionPosition = $(this).attr('data-click-for');

      parentPosition.find('.active').removeClass('active');
      $(this).addClass('active');
      parentPosition.find(actionPosition).addClass('active');
    });


    /**
     * =======================================
     * Active Navbar Windows, Tablet
     * =======================================
     */
    /* Style 1 */
    var navbarActionItem  = '#js-navbar-menu',
        navbarStyle       = $( navbarActionItem ),
        navbarDelay       = 0;
    navbarStyle.css('display', 'none').find('li').css('display', 'none');
    navbarStyle.find('li').each( function() {
      navbarDelay += 0.05;
      $(this).find('.btn-nav').css({
        '-webkit-transition-delay': navbarDelay + 's',
        '-moz-transition-delay': navbarDelay + 's',
        '-o-transition-delay': navbarDelay + 's',
        'transition-delay': navbarDelay + 's'
      });
    });
    navbarStyle.prev('.navbar-header').find('.nav-trigger-animate').on('click', function( el ) {
      el.preventDefault();
      var action = $(this);

      if( navbarStyle.hasClass('open') ) {

        action.removeClass('nav-visible');
        navbarStyle.removeClass('open');
        setTimeout( function() {
          navbarStyle.find('li').css('display', 'none');
        }, 400);

        setTimeout(function() {
          $( navbarActionItem ).slideUp(100);
        }, 400);

      }else {

        $( navbarActionItem ).slideDown(100);

        navbarStyle.find('li').css('display', 'block');
        setTimeout( function() {
          action.addClass('nav-visible');
          navbarStyle.addClass('open');
        }, 100);

      }
    
    });

    /* Style 2 */
    $( '.navbar-toggle' ).on('click', function( el ) {
      el.preventDefault();
      $(this).toggleClass( 'nav-visible' );
    });



    /**
     * =======================================
     * Top Fixed Navbar
     * =======================================
     */
    $(document).on('scroll', function() {
      var scrollPos = $(this).scrollTop();

      if( scrollPos > 10 ) {
        $('.navbar-fixed-top').addClass('navbar-home');
      } 
      else {
        $('.navbar-fixed-top').removeClass('navbar-home');
      }
    });


    /**
     * =======================================
     * NAVIGATION SCROLL
     * =======================================
     */
    $('#navbar-nav').singlePageNav({
      speed:        1000,
      threshold:    0.2, // Adjust if Navigation highlights too early or too late
      easing:       "swing",
      currentClass: "active",
      offset:       $('.navbar-header').outerHeight()
    });



    /**
     * =======================================
     * Section Discription View
     * =======================================
     */
    var fullScreen = $('.full-screen');

    fullScreen.find('.visible .btn').on('click', function( el ) {
      el.preventDefault();

      var action      = $(this),
          actionAttr  = action.closest('.content-area');
      actionAttr.addClass('active').closest('.full-screen').find( actionAttr.attr('data-action')).addClass('active');
    });

    fullScreen.find('.btn-close').on('click', function( el ) {
      el.preventDefault();
      var action      = $(this),
          actionAttr  = action.closest('.content-area');
      actionAttr.removeClass('active').closest('.full-screen').find( actionAttr.attr('data-action')).removeClass('active');

    });


    /**
     * =======================================
     * COLLAPSE SECTION
     * =======================================
     */
    var faq = $('.faq-group');

    faq.find('.each-faq').each(function() {
      if( !$(this).hasClass('open') ) {
        $(this).find('.faq-content').hide();
      }
    });

    faq.find('.faq-trigger').on('click', function(el) {
      el.preventDefault();

      var openFaq = $(this).closest('.each-faq');

      openFaq.toggleClass('open').find('.faq-content').slideToggle( 300 );
      openFaq.siblings('.each-faq:visible').each(function() {
        $(this).removeClass('open').find('.faq-content').slideUp( 300 );
      });

    })


    /**
     * ==============================
     * PROJECT LOADING           
     * ==============================
     */
    $('.view-project-detail').on('click', function(event) {
      event.preventDefault();
      var href          = $(this).attr('href') + ' ' + $(this).attr('data-action'),
          dataShow      = $('#project-gallery-view'),
          dataShowMeta  = $('#project-gallery-view meta'),
          dataHide      = $('#project-gallery'),
          preLoader     = $('#project-filter-loader'),
          backBtn       = $('#back-button'),
          filterBtn     = $('#filter-button');

      dataHide.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
      filterBtn.animate( { 'marginLeft':'-120%' }, { duration: 400, queue: false } );
      dataHide.fadeOut(400);
      filterBtn.fadeOut(400);
      setTimeout( function() { preLoader.show(); }, 400);
      setTimeout( function() {
        dataShow.load( href, function() {
          dataShowMeta.remove();
          preLoader.hide();
          dataShow.fadeIn(600);
          backBtn.fadeIn(600);
        });
      },800);
    });

    $('#back-button').on('click', function(event) {
      event.preventDefault();
      var dataShow    = $('#project-gallery'),
          dataHide    = $('#project-gallery-view'),
          filterBtn   = $('#filter-button');

      $("[data-animate]").each( function() {
        $(this).addClass($(this).attr('data-animate'));
      });

      dataHide.fadeOut(400);
      $(this).fadeOut(400);
      setTimeout(function(){
        dataShow.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
        filterBtn.animate( { 'marginLeft': '0' }, { duration: 400, queue: false } );
        dataShow.fadeIn(400);
        filterBtn.fadeIn(400);
      },400);
      setTimeout(function(){
        dataShow.find('.fadeInRight, .fadeInLeft, .fadeInUp, .fadeInDown').removeClass('fadeInRight').removeClass('fadeInLeft').removeClass('fadeInUp').removeClass('fadeInDown');
      },1500);
    });



    /**
     * ============================
     * CONTACT FORM 1
     * ============================
    */
    $("#contact-form-1").submit(function(e) {
      e.preventDefault();
      var success = $(this).find('.email-success'),
        failed = $(this).find('.email-failed'),
        loader = $(this).find('.email-loading'),
        postUrl = $(this).attr('action');

      success.fadeOut(100); failed.fadeOut(100); loader.fadeOut(100);

      var data = {
        name: $(this).find('.contact-name').val(),
        email: $(this).find('.contact-email').val(),
        message: $(this).find('.contact-message').val()
      };

      if ( isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
        $.ajax({
          type: "POST",
          url: postUrl,
          data: data,
          beforeSend: function() {
            loader.fadeIn(500);
          },
          success: function(data) {
            loader.fadeOut(500);
            failed.fadeOut(500);
            success.delay(500).fadeIn(500);
          },
          error: function(xhr) { // if error occured
            loader.fadeOut(500);
            success.fadeOut(500);
            failed.delay(500).fadeIn(500);
          },
          complete: function() {
            loader.fadeOut(500);
          }
        });
      } else {
        loader.fadeOut(500);
        failed.delay(500).fadeIn(500);
        success.fadeOut(500);
      }

      return false;
    });

    function mailchimpCallback(resp) {
         if(resp.result === 'success') {
            $('.subscription-success')
                .html('<i class="fa fa-check"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);

            $('.subscription-failed').fadeOut(500);
            
        } else if(resp.result === 'error') {
            $('.subscription-failed')
                .html('<i class="fa fa-close"></i>' + "&nbsp;" + resp.msg)
                .delay(500)
                .fadeIn(1000);
                
            $('.subscription-success').fadeOut(500);
        }  
    };
/**
     * ====================================
     * LOCAL NEWSLETTER SUBSCRIPTION
     * ====================================
     */
    $("#local-subscribe").submit(function(e) {
        e.preventDefault();
        var data = {
            email: $("#subscriber-email").val()
        };

        if ( isValidEmail(data['email']) ) {
            $.ajax({
                type: "POST",
                url: "../../assets/php/subscribe.php",
                data: data,
                success: function() {
                    $('.subscription-success').fadeIn(1000);
                    $('.subscription-failed').fadeOut(500);
                }
            });
        } else {
            $('.subscription-failed').fadeIn(1000);
            $('.subscription-success').fadeOut(500);
        }

        return false;
    });



    /**
     * =======================================
     * TESTIMONIAL SYNC WITH CLIENTS
     * =======================================
     */
    var sync1 = $("#sync1"); // client's message
    var sync2 = $("#sync2"); // client's message

    sync1.owlCarousel({
      navigation: true,
      navigationText: [
        "<i class='fa fa-arrow-left-1'></i>",
        "<i class='fa fa-arrow-right-1'></i>"
      ],
      autoPlay : 5000,
      stopOnHover : true,
      paginationSpeed : 1000,
      goToFirstSpeed : 2000,
      singleItem : true,
      autoHeight : false,
      afterAction : syncPosition,
      transitionStyle:"fade"
    });
    sync2.owlCarousel({
      singleItem : true,
      pagination:false,
      responsiveRefreshRate : 100,
      //Mouse Events
      dragBeforeAnimFinish : false,
      mouseDrag : false,
      touchDrag : false,
      afterInit : function(el){
        el.find(".owl-item").eq(0).addClass("synced");
      },
      transitionStyle:"fade"
    });

    function syncPosition(el){
      var current = this.currentItem;
      $("#sync2")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced")
      if($("#sync2").data("owlCarousel") !== undefined){
        $('#sync2').trigger('owl.goTo', number);
      }
    }

    $("#sync2").on("click", ".owl-item", function(e){
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo",number);
    });


  });


  $(window).load(function(){

    /* ISOTOPE INIT */
    $('.grid').isotope({
      layoutMode: 'packery',

      packery: {
        
      },
      itemSelector: '.grid-item',
      percentPosition: true,
    });
  });


} (jQuery) );

