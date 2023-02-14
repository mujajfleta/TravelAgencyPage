//animation of the title
$(document).ready(function(){ 
    $("#beginning").hover(function(){
        $(this).animate({ opacity: 0.6});
    });
    });

$(document).ready(function(){
    $('#tips').click(function(){
        $(this).html("<b>Top 10 Theatre Shows<b>");
    });

});


//for the Record's text
$(document).ready(function(){        
$("#teksti1").hover(function(){
    $(this).css("color","black");
}, function(){
$(this).css("color","pink");
});
$("#teksti1").click(function(){
    $("#panel").slideToggle("slow");
});
});


//For the records table
$(document).ready(function(){
    $(".content-table").mouseenter(function(){
        $(".content-table th").css("background-color","pink");
    });
    $(".content-table").mouseout(function(){
        $(".content-table th").css("background-color","maroon");
    });
    
});

//for the rates table
$(document).ready(function(){
    $("#hide").click(function(){
        $(".move").hide()
    });
    $("#show").click(function(){
        $(".move").show();
    });
});

//for the discount codes
$(document).ready(function(){
    $("#fadein").click(function(){
        $("#disc1").fadeOut(6000);
    });
 
    $("#fadein2").click(function(){
        $("#disc2").fadeOut(6000);
    });

    });

