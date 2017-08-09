// buttons object

var buttons = {
    web: '#show_web',
    graphic: '#show_graphic',
    all: '#show_all',
    cv: '#show_cv'
};

// DOM classes

var classes = {
    web: '.web',
    graphic: '.graphic',
    all: '.graphic.web',
    cv: '.cv'
}

// selector sidebar
$(document).ready(function() {
    
    // function to check if web or graphic are active
    function checkActive () {
        
        // if web or graphic are active, remove active from all 
        
        if ($(buttons.web).hasClass("active") || $(buttons.graphic).hasClass("active") ) {
            //remove active class from #show_all    
            $(buttons.all).removeClass("active");
            // console.log('#show_web or #show_graphic has active class');
        } else {
            
        // if neither web or graphic are active, add active to all
            
            $(buttons.all).addClass("active");
            // console.log('neither #show_web or #show_all have active class');
        }
        
    }
    
    /////////////////////////
    // show/hide functions //
    /////////////////////////
    
    // web development
    
    $(buttons.web).click( function() {
        $(classes.graphic).toggle("fast").css("display", "block");
        $(classes.cv).hide("fast");
        
        $(this).toggleClass("active");
        $(buttons.cv).removeClass("active");
        
        checkActive();
        
    });
    
    // graphic design
    
    $(buttons.graphic).click( function() {
        $(classes.web).toggle("fast").css("display", "block");
        $(classes.cv).hide("fast");
        
        $(this).toggleClass("active");
        $(buttons.cv).removeClass("active");
        
        checkActive();
        
    });
    
    // all
    
    $(buttons.all).click( function() {
        
        // show/hide other objects
        $(classes.web).show("fast").css("display", "block");
        $(classes.graphic).show("fast").css("display", "block");
        $(classes.cv).hide("fast");
        
        $(this).addClass("active");
        $(buttons.web).removeClass("active");
        $(buttons.graphic).removeClass("active");
        $(buttons.cv).removeClass("active");
    });
    
    // cv
    
    $(buttons.cv).click(function() {
        
        $(classes.cv).toggle(1/*empty wouldn't work*/).css("display", "block");
        
        $(this).toggleClass("active");
        
    });
});

$('.service').click(function(e) {
    e.preventDefault();
});