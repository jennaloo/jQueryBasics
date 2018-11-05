$("#show").click(function () {
    $("img").show();
});

$("#hide").click(function () {
    $("img").hide();
});

$("#toggle").click(function () {
    $("img").toggle();
});

$("#fade").click(function () {
    $("img").toggleClass('fade normal');
});

$("img").mouseenter(function () {
    $("img").attr('src', '../img/cat.jpg')
});


$("img").mouseout(function () {
    $("img").attr('src', '../img/beach.jpg')
});

$("#addStuff").click(function () {
    $("ul").append("<li>Another Item</li>");
});

$("#lastButton").click(function () {
    $('body').replaceWith('<div class="bg-danger" style="height:100vh;" </div>');
});
