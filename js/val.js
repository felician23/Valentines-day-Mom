
$(document).ready(function() {
    let envelop = $('#envelop');
    let btn_open = $('#open');
    let btn_reset = $('#reset');

    envelop.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelop.addClass('open')
        .removeClass('close');
    }
    function close() {
        envelop.addClass('close')
        .removeClass('open');
    }
   })