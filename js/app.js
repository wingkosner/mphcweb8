$(document).foundation({
  orbit: {
    animation: 'slide',
    timer_speed: 2000,
    pause_on_hover: true,
    animation_speed: 500,
    navigation_arrows: true,
    bullets: true,
    slide_number: false
  }
});

$(document).ready(function() {
 
  $("#ticker-slider").owlCarousel({
 
    // Most important owl features
    items : 5,
    itemsCustom : false,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [980,4],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,2],
    singleItem : false,
    itemsScaleUp : false,
 
    //Basic Speeds
    slideSpeed : 500,
    paginationSpeed : 500,
    rewindSpeed : 500,
 
    //Autoplay
    autoPlay : 3000,
    stopOnHover : false,
 
    // Navigation
    navigation : false,
    navigationText : ["prev","next"],
    rewindNav : true,
    scrollPerPage : false,
 
    //Pagination
    pagination : false,
    paginationNumbers: false,
 
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
 
    // CSS Styles
    baseClass : "owl-carousel",
    theme : "owl-theme",
 
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
 
    //Auto height
    autoHeight : false,
 
    //JSON 
    jsonPath : false, 
    jsonSuccess : false,
 
    //Mouse Events
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
 
    //Transitions
    transitionStyle : false,
 
});


});

    $('#demoTab').easyResponsiveTabs();

