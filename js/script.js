// Show the loading image.
$('#loader_img').fadeIn(2000);

// When main image loads:
$(window).load(function() {
  // Fade out and hide the loading image.
  $('#loader_img').fadeOut(1000, function(){
   $('#main-content').fadeIn(1000); 
  })
});

// selector sidebar
$(document).ready(function() {
    $('#show_graphic').click(function() {
            $("#cv").hide("fast");
            $(".web").hide("fast");
            $(".graphic").show("fast").css("display", "block");
            $(".graphicweb").show();
    });
    $('#show_web').click(function() {
            $("#cv").hide("fast").css("display", "none");
            $(".graphic").hide("fast").css("display", "none");
            $(".web").show("fast").css("display", "block");
            $(".graphicweb").show("fast").css("display", "block");
    });
    $('#show_all').click(function() {
            $("#cv").hide("fast");
            $(".web").show("fast").css("display", "block");
            $(".graphic").show("fast").css("display", "block");
            $(".graphicweb").show("fast").css("display", "block");
    });
    $('#show_about').click(function() {
            $("#CV").hide("fast");
            $(".graphic").toggle("fast");
            $(".graphicweb").toggle("fast");
            $(".web").toggle("fast");
            $("#about").toggle("fast");
    });
    $('.show_cv').click(function() {
            $("#about").hide("fast");
            $("#cv").toggle("fast");
    });
});
$('.service').click(function(e) {
    e.preventDefault();
});