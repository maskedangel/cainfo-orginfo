$('a').click(function(ev) {
    ev.preventDefault();

    var link = $(this);
    var id = link.attr("href").split("#")[1];
    var target = $("#"+id);

    $('html,body').animate({
        scrollTop: target.offset().top
    }, 2000);
    return false;
})  ;
