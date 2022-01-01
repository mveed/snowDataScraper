$(function () {
    var $popup = $('.ab-popup');
    if ($popup.length) {
        var store = localStorage.getItem('AB_POPUP');
        if (store === null || store === undefined) {
            $popup.addClass('ab-popup_active');
        }

        $('.ab-popup_close').click(function () {
            $popup.removeClass('ab-popup_active');
        });

        localStorage.setItem('AB_POPUP', true);
    }
});