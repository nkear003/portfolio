$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $("#main-content").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(400, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(300, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});

// just for home button 
$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
        baseHeight   = 0,
        $el;
        
    $(document).load(function() { // wait for document to load to measure height
        $pageWrap.height($pageWrap.height());
        baseHeight = $pageWrap.height() - $mainContent.height();
    });
    
    $("#home").click(function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
            $mainContent
                .find("#guts")
                .fadeOut(400, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(300, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                    });
                });
        };
        
    });
    
    $(window).trigger('hashchange');

});