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
    
    // function to remove active class from #show_all
    
    function remove_active_all () {
        $('#selector li').find('a#show_all').removeClass("active");
    }
        
/*    if( $( "#show_graphic" ).hasClass( "active" ) || $( "#show_web" ).hasClass( "active" )  ) {
        $('#selector li').find('a#show_all').removeClass("active");
        console.log('true');
    } else {
        $('#selector li').find('a#show_all').addClass("active");
        console.log('else');
    }
     
    if( $this.is( "#show_all" ) ) {
        $('#selector li').find('a#show_all').removeClass("active");
        console.log('true');
    } else {
        $('#selector li').find('a#show_all').addClass("active");
        console.log('else');
    }*/
    
    // add active class to active tab and remove active class from all inactive
    
    /*$("#selector a").click(function(){
        $(this).toggleClass("active");
    });*/
    
    /////////////////////////
    // show/hide functions //
    /////////////////////////
    
    // web development
    
    $('#show_web').click( function() {
        $('.graphic').toggle("fast").css("display", "block");
        $("#cv").hide("fast");
        
        $(this).toggleClass("active");
        
//        remove_active_all();
        
    });
    
    // graphic design
    
    $('#show_graphic').click( function() {
        $('.web').toggle("fast").css("display", "block");
        $("#cv").hide("fast");
        
        $(this).toggleClass("active");
        
//        remove_active_all();
        
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
    
/*    $('#show_graphic').click(function() {
            $("#cv").hide("fast");
            $(".web").hide("fast");
            $(".graphic").show("fast").css("display", "block");
            $(".graphicweb").show();
    });*/
/*    $('#show_web').click(function() {
            $("#cv").hide();
            $(".graphic").hide("fast");
            $(".web").show("fast").css("display", "block");
            $(".graphicweb").show("fast").css("display", "block");
            
//            $("#show_web").addClass("active");
    });
    $('#show_all').click(function() {
            $("#cv").hide();
            $(".web").show("fast").css("display", "block");
            $(".graphic").show("fast").css("display", "block");
            $(".graphicweb").show("fast").css("display", "block");
        
//            $("#show_all").addClass("active");
    });
    $('.show_cv').click(function() {
            $("#cv").toggle();
    });*/
});
$('.service').click(function(e) {
    e.preventDefault();
});