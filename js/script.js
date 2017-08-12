$( window ).on( "load", function() { 

    $('#main-content').addClass("show animated fadeIn");
})

// selector sidebar
$(document).ready(function() {
    
    var id, plug, hide;

    // buttons object
    var buttons = {
        web: '#web',
        graphic: '#graphic',
        all: '#all',
        cv: '#cv'
    };

    // DOM classes object
    var classes = {
        web: '.web',
        graphic: '.graphic',
        all: '.graphic.web',
        cv: '.cv'
    }
    
    checkActive();
    
    $(".btn").click( function() {
        
        // get id of button pressed
        id = $(this).attr("id");
        
        // toggle active class of btn
        $(this).toggleClass("active");
        
        switch (id) {
            case 'all':
                showAll();
                $(buttons.graphic + ', ' + buttons.web).removeClass("active");
                checkActive();
                break;
            case 'cv':
                toggleCV();
                checkActive();
                break;
            case 'graphic':
            case 'web':
                hideProjects(id);
                checkActive();
        } 

    });
    
    function toggleCV() {
        $(classes.cv).toggle("fast").css("display", "block");
    }
    
    function removeCV() {
        $(classes.cv).hide("fast");
        $(buttons.cv).removeClass("active");
    }
    
    function showAll() {
        $(classes.graphic + ', ' + classes.web).show("fast").css("display", "block");
        removeCV();
    }
      
    function hideProjects(id) {
        
        switch (id) {
            case 'web':
                hide = classes.graphic;
                break;
            case 'graphic':
                hide = classes.web;
        }
        
        // hide other classes
        $(hide).toggle("fast").css("display", "block");
        
    }
    
    function checkActive() {
        
        // if web or graphic are active
        if ($(buttons.web).hasClass("active") || $(buttons.graphic).hasClass("active") ) {
            
            //  remove active class from #show_all    
            $(buttons.all).removeClass("active");
            // console.log('web or graphic is active');
            
        } else if(!$(buttons.web).hasClass("active") && !$(buttons.graphic).hasClass("active")) {
            
            $(buttons.all).addClass("active");
            // console.log('neither web or graphic are active');
            
        }
        
    }
    
});

$('.service').click(function(e) {
    e.preventDefault();
});