$(document).ready(function(){
    $(".container").mouseenter(function(){
    	var link_id1 = $(this).find(".link-inner").attr("id");
    	var css_str1 = "url('/Assets/" + link_id1 + "-hover.png')";
    	var link_id2 = $(this).find(".link-outer").attr("id");
    	var css_str2 = "url('/Assets/" + link_id2 + "-hover.png')";
        $(this).find(".link-outer").css("transform", "rotate(220deg)");
        $(this).find(".link-outer").css("width", "90%");
        $(this).find(".link-outer").css("height", "90%");
        $(this).find(".link-outer").css("margin-left", "5%");
        $(this).find(".link-outer").css("margin-top", "5%");
        $(this).find(".link-outer").css("background-image", css_str2);
        $(this).find(".link-inner").css("transform", "rotate(-220deg)");
        $(this).find(".link-inner").css("width", "80%");
        $(this).find(".link-inner").css("height", "80%");
        $(this).find(".link-inner").css("margin-left", "10%");
        $(this).find(".link-inner").css("margin-top", "10%");
        $(this).find(".link-inner").css("background-image", css_str1);
        $(this).find(".link-text").css("opacity", "1");
    });
    $(".container").mouseleave(function(){
    	var link_id1 = $(this).find(".link-inner").attr("id");
    	var css_str1 = "url('/Assets/" + link_id1 + ".png')";
    	var link_id2 = $(this).find(".link-outer").attr("id");
    	var css_str2 = "url('/Assets/" + link_id2 + "-hover.png')";
        $(this).find(".link-outer").css("transform", "rotate(0deg)");
        $(this).find(".link-outer").css("width", "100%");
        $(this).find(".link-outer").css("height", "100%");
        $(this).find(".link-outer").css("margin-left", "0");
        $(this).find(".link-outer").css("margin-top", "0");
        $(this).find(".link-outer").css("background-image", "url('/Assets/link-outer.png')");
        $(this).find(".link-inner").css("transform", "rotate(0deg)");
        $(this).find(".link-inner").css("width", "60%");
        $(this).find(".link-inner").css("height", "60%");
        $(this).find(".link-inner").css("margin-left", "20%");
        $(this).find(".link-inner").css("margin-top", "20%");
        $(this).find(".link-inner").css("background-image", css_str1);
        $(this).find(".link-text").css("opacity", "0");
    });
});