/*// Show the loading image.
$('#loader_img').fadeIn(2000);

// When main image loads:
$(window).load(function() {
  // Fade out and hide the loading image.
  $('#loader_img').fadeOut(1000, function(){
   $('#main-content').fadeIn(1000); 
  })
});*/

$(window).load(function() {
    $('#main-content').fadeIn(1000);    
});

// selector sidebar
$(document).ready(function() {
    
    // function to check if web or graphic are active
    
    function checkActive () {
        // check #show_web to see if active
        
        if ($('#show_web').hasClass("active") || $('#show_graphic').hasClass("active") ) {
            //remove active class from #show_all    
            $('#show_all').removeClass("active");
            console.log('#show_web or #show_graphic has active class');
        } else {
            $('#show_all').addClass("active");
            console.log('neither #show_web or #show_all have active class');
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
        
        checkActive();
        
    });
    
    // graphic design
    
    $('#show_graphic').click( function() {
        $('.web').toggle("fast").css("display", "block");
        $("#cv").hide("fast");
        
        $(this).toggleClass("active");
        
        checkActive();
        
    });
    
    // all
    
    $('#show_all').click( function() {
        $('.web').show("fast").css("display", "block");
        $('.graphic').show("fast").css("display", "block");
        $("#cv").hide("fast");
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