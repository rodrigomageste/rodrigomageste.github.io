/* MOBILE MENU
* ======================================================= */

jQuery(document).ready(function ($) {

    var $menu_select = $("<select style=\"border: 1px solid #cccccc; background-color: #ffffff; height: 30px; line-height: 30px;\" />");
    $("<option />", { "selected": "selected", "value": "", "text": "Site Navigation" }).appendTo($menu_select);
    $menu_select.appendTo(".menu");

    $(".menu ul li a").each(function () {
        var menu_url = $(this).attr("href");
        var menu_text = $(this).text();
        if ($(this).parents("li").length == 2) { menu_text = '- ' + menu_text; }
        if ($(this).parents("li").length == 3) { menu_text = "-- " + menu_text; }
        if ($(this).parents("li").length > 3) { menu_text = "--- " + menu_text; }
        $("<option />", { "value": menu_url, "text": menu_text }).appendTo($menu_select)
    });

    field_id = ".menu select";
    $(field_id).change(function () {
        value = $(this)['context']['value'];
        window.location = value;
        //go
    });
});

/* WIDE MENU
* ======================================================= */

var $navigation    = $('.menu ul');
        // Regular nav
$navigation.on('mouseenter', 'li', function () {
    var $this = $(this),
                $subMenu = $this.children('ul');
    if ($subMenu.length) $this.addClass('hover');
    $subMenu.hide().stop(true, true).fadeIn(150);
}).on('mouseleave', 'li', function () {
    $(this).removeClass('hover').children('ul').stop(true, true).fadeOut(70);
});

// filter items when filter link is clicked
$('#filters a').click(function () {
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    return false;
});