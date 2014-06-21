require(["jquery", "js/bootstrap/dropdown.js", "js/bootstrap/affix.js"], function($, dropdown, affix){
    
    $('#nav-wrapper').height($("#nav").height());
    $('#nav').affix({offset: { top: $('#nav').offset().top }});
});


