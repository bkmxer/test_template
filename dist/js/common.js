(function () {
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
        $('.header .nav__links').toggleClass('active');
    })
})();

(function () {
    $('.header .nav__links').on('click', function() {
        $('.bar').removeClass('animate');
        $('.header .nav__links').removeClass('active');
    })
})();


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('tags');
ul.onclick = function(event) {
    $('.nav__links--catalog li').removeClass('list__item--active');
    var target = getEventTarget(event);
    target.parentElement.className += ' list__item--active';
    var tag = target.getAttribute("item-tag").toLowerCase();
    tag = tag.toString();
    $('div[data-item-tag]').addClass('hidden');
    $('div[data-item-tag*=' +tag + ']').each(function() {
        $(this).removeClass('hidden');
    });

};