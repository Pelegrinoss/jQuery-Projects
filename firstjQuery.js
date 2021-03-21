$(".highlight").css("width", "200px");
$("#third").css("border", "orange solid 6px");
$("div:first").css("color", "pink");
$("div").text("New Text!");
$("img").css("width", "200px");
$("img").attr("src", "https://images.theconversation.com/files/123546/original/image-20160523-11012-ue2y70.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip");
$("input").attr("type", "color");
$("input").attr("type", "text");
$("div").last().css("font-size","40px");
$("select").val();
$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").toggleClass("done");
$("li").first().toggleClass("wrong");
$("h1").click(function(){
    alert("h1 clicked!");
});
$("h1").on("click", function(){
    alert("h1 clicked!!!");
});
$("button").click(function(){
    $(this).toggleClass("wrong");
});
$("button").on("mouseenter", function(){
    $(this).css("font-weight","700");
});
$("button").on("mouseleave", function(){
    $(this).css("font-weight","100");
});
$("li").click(function(){
    let text = $(this).text();
    alert("You clicked " + text);
});
$("input").keypress(function(event){
    if(event.which === 13){
        alert("you pressed enter");
    }
});
$("input").on("keypress",function(event){
    if(event.which === 13){
        alert("you pressed enter!!!");
    }
});
$("#divB").on("click", function(){
    $(".divs").fadeOut(1200, function(){
        $(".divs").fadeIn(1200);
    });
})
$("#divB2").on("click", function(){
    $(".divs").slideToggle(1800);
})

