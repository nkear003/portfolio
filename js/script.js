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
    
    $(".btn").click( function() {
        
        // get id of button pressed
        id = $(this).attr("id");
        
        // toggle active class of btn
        $(this).toggleClass("active");
        
        switch (id) {
            case 'all':
                showAll();
                clearActive();
                break;
            case 'cv':
                toggleCV();
                break;
            case 'graphic':
            case 'web':
                hideProjects(id);
//                hideAllOtherProjects(id);
        } 

    });
    
    function toggleCV() {
        $(classes.cv).toggle("fast").css("display", "block");
        $(this).toggleClass("active");
    }
    
    function clearActive() {
        $(buttons.graphic + ', ' + buttons.web + ', ' + buttons.cv).removeClass("active");
    }
    
    function showAll() {
        $(classes.cv).hide("fast");
        $(classes.graphic + ', ' + classes.web).show("fast").css("display", "block");
        checkActive();
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

        // hide CV
        $(classes.cv).hide("fast");

        // remove CV active class
        $(buttons.cv).removeClass("active");

        // run checkActive()
        checkActive();
        
    }
    

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
    
});

$('.service').click(function(e) {
    e.preventDefault();
});