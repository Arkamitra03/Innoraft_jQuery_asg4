$(document).ready(function(){
    //css styling
    $("body").css("margin","2%");
    $("body").css("text-align","center");
    $("header").height("40px");
    $("header").width("100%");
    $("body").css("overflow-x","hidden");
    $("header").css("background-color","rgb(127, 215, 237)");
    
    $(".box").css("display","flex");

    $(".box1").width("30%");
    $(".box1").height("500px");
    $(".box1").css("background-color","rgb(189, 247, 197)");
    $(".box1").css("margin-right","15px");
    $(".box1").css("margin-top","20px");
    $(".sub-box").css("display","inline-block");

    $(".sub-box").width("70%");
    $(".box2").height("350px");
    $(".box2").css("background-color","rgb(237, 156, 127)");
   
    $(".box3").height("130px");
    $(".box3").css("background-color","rgb(181,136,40)");
    $("footer").height("40px");
    $("footer").width("100%");
    $("footer").css("margin-top","15px");
    $("footer").css("cursor","pointer");
    $("footer").css("background-color","rgb(184, 127, 237)");
    //events
    $("header").click(function(){
        $(this).css("background-color","rgb(94, 213, 110)");
        $(this).css("cursor","pointer");
    });
    $(".box1 h2").click(function(){
        $(this).text("LeftBar");
    });
    $(".box3").click(function(){
        $(".box2").fadeOut();
    });
    $(".context").hide();
    $("footer").click(function(){
       
        $(".context").show();
       
    });
    $(".cross").click(function(){
        $(this).css("cursor","pointer");
        $(".context").hide();
        
    });
});