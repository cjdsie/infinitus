/* There are three styles of Slideshows you can use. #Slider1 offers the ability to have center buttons underneath the images. #Slider2 offers left and right arrows. And finally #Slider3 is the Kitchen sink. Both centered buttons and nav arrows are used. For Development, please delete the Sliders you don't need.*/


// A fix is on the way to get Windows Phone 8 to recognize
// CSS pixels rather than device pixels (which is preferred behavior).
// In the meantime, use this javascript before any other script
// if you need an immediate patch:
//
// http://trentwalton.com/2013/01/16/windows-phone-8-viewport-fix/
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style");
  msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}
;


// Slideshow 1
 $("#slider1").responsiveSlides({
   maxwidth: 800,
   speed: 800
 });

 // Slideshow 2
 $("#slider2").responsiveSlides({
   auto: false,
   pager: true,
   speed: 300,
   maxwidth: 540
 });

 // Slideshow 3
 $("#slider3").responsiveSlides({
   manualControls: '#slider3-pager',
   maxwidth: 540
 });



 // Slideshow 4
  $("#slider4").responsiveSlides({
    auto: false,
    pager: false,
    nav: true,
    speed: 1100,
    namespace: "callbacks"
  });


 $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    play: 8000,
    slide_speed: 800,
    pagination: true,
    hashchange: false,
    scrollable: true
  });

/* Simple line of code to create a collapsed menu in smaller screen sizes. Originally developed by Jason Weaver http://jasonweaver.name/lab/flexiblenavigation/, FlexNav offers the ability to add submenus to your top-level information for more complex, deeper navigation.*/

var cbpAnimatedHeader = (function() {
 
    var docElem = document.documentElement,
        header = document.querySelector( '.homepage .header_nav' ),
        didScroll = false,
        changeHeaderOn = 100;
 
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 150 );
            }
        }, false );
    }
 
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'header_nav-shrink' );
        }
        else {
            classie.remove( header, 'header_nav-shrink' );
        }
        didScroll = false;
    }
 
    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }
 
    init();
 
})();


// Init responsive-nav.js
      var nav = responsiveNav("#nav");


$("img.lazy").lazyload({ threshold : 200 });


document.ontouchmove = function(e) {
    e.preventDefault();
  };

$(function() {
	var $slides = $('#slides');

  $('#slides').on('mouseenter', function() {
        $(this).superslides('stop');
        console.log('Stopped')
      });
  $('#slides').on('mouseleave', function() {
    $(this).superslides('start');
    console.log('Started')
  });
  Hammer($slides[0]).on("swipeleft", function(e) {
    $slides.data('superslides').animate('next');
  });
  
  Hammer($slides[0]).on("swiperight", function(e) {
    $slides.data('superslides').animate('prev');
  });
  $('#slides').superslides({
    hashchange: true,
    //play: 2000,
    //scrollable: true
  });
});



/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. */

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});