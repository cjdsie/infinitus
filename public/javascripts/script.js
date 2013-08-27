/* There are three styles of Slideshows you can use. #Slider1 offers the ability to have center buttons underneath the images. #Slider2 offers left and right arrows. And finally #Slider3 is the Kitchen sink. Both centered buttons and nav arrows are used. For Development, please delete the Sliders you don't need.*/

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
    slide_speed: 800,
    pagination: false,
    hashchange: true,
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

$('#nav').onePageNav({
	currentClass: 'current',
	changeHash: true,
	scrollThreshold: 0.5,
	scrollSpeed: 650,
	easing: 'linear',
});



$(function() {
  $('#slides').superslides({
    hashchange: true,
    animation: slide,
    play: 2000
  });
  $('#slides').on('mouseenter', function() {
        $(this).superslides('stop');
        console.log('Stopped')
      });
  $('#slides').on('mouseleave', function() {
    $(this).superslides('start');
    console.log('Started')
  });
});



/* FitVids is a standard when it comes to resizing videos through Responsive design. It currently supports inputs from YouTube, Vimeo, Blip.tv, Viddler and Kickstarter. FitVid also offers the ability to add your own vendor as well. */

$(".container").fitVids();
// Custom selector and No-Double-Wrapping Prevention Test
$(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});