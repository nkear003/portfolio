// When main image loads:
//$(window).load(function() {
//    // Fade out and hide the loading image.
//    $('#loader_img').fadeOut(1000, function(){
//        $('#page-wrap').fadeIn(1000); 
//    });
//    
//});

// selector sidebar
$(document).ready(function() {
    
    // fade page in
    
    // $('#page-wrap').fadeIn(1000); 
    
    // function to check if web or graphic are active
    function notAllActive () {
        
        // if web or graphic are active, remove active from all 
        
        if ($('#show_web').hasClass("active") || $('#show_graphic').hasClass("active") ) {
            //remove active class from #show_all    
            $('#show_all').removeClass("active");
            // console.log('#show_web or #show_graphic has active class');
        } else {
            
        // if neither web or graphic are active, add active to all
            
            $('#show_all').addClass("active");
            // console.log('neither #show_web or #show_all have active class');
        }
        
    }
    
    // if all has active, remove active from web and graphic
    function allActive() {    
        
        if ($('#show_all').hasClass("active") ) {
            //remove active from web and graphic
            $('#show_web').removeClass("active");
            $('#show_graphic').removeClass("active");
        }
    }
    
    /////////////////////////
    // show/hide functions //
    /////////////////////////
    
    // web development
    
    $('#show_web').click( function() {
        $('.graphic').toggle("fast").css("display", "block");
        $("#cv").hide("fast");
        
        $(this).toggleClass("active");
//        $('#show_all').toggleClass("active");
        
        notAllActive();
        
    });
    
    // graphic design
    
    $('#show_graphic').click( function() {
        $('.web').toggle("fast").css("display", "block");
        $("#cv").hide("fast");
        
        $(this).toggleClass("active");
//        $('#show_all').toggleClass("active");
        
        notAllActive();
        
    });
    
    // all
    
    $('#show_all').click( function() {
        $('.web').show("fast").css("display", "block");
        $('.graphic').show("fast").css("display", "block");
        $("#cv").hide("fast");
        
//        allActive();
        $(this).addClass("active");
        $('#show_web').removeClass("active");
        $('#show_graphic').removeClass("active");
    });
    
    // cv
    
    $('.show_cv').click(function() {
        
        $("#cv").toggle(1/*empty wouldn't work*/).css("display", "block");
        
        $(this).toggleClass("active");
        
    });
});

$('.service').click(function(e) {
    e.preventDefault();
});