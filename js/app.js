$("#learn-more").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-two").offset().top
    }, 200);
});

$("#to-team").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-three").offset().top
    }, 200);
});

$("#to-top").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-one").offset().top
    }, 200);
});

$('#about-accordian').liteAccordion();
