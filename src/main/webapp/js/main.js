require([
	"jquery", 
	"js/bootstrap/button.js",
	"js/bootstrap/collapse.js",
	"js/bootstrap/dropdown.js", 
	"js/bootstrap/affix.js",
	"js/bootstrap/carousel.js",
	"js/bootstrap/transition.js"
	], function($, button, collapse, dropdown, affix, carousel, transition){
    
    $('#nav').affix({offset: { top: $('#nav').offset().top }});
    $('.carousel').carousel({interval: 2000, cycle: true});    

});


