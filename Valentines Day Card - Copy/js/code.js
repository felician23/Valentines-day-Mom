/* document.addEventListener('DOMContentLoaded', function() {
   let envelop = document.getElementById('envelop');
   let btn_open = document.getElementById('open');
   let btn_reset = document.getElementById('reset');
   

    envelop.click(function() {
        open();
    })

    btn_open.click(function() {
        open();
    })

    btn_reset.click(function() {
        close();
    })

   envelop.addEventListener("click", function() {
      envelop.classList.add('open')
      envelop.classList.remove('close')
   });
   
   btn_reset.addEventListener("click", function() {
      btn_close.classList.add('close')
      btn_close.classList.remove('open')
   });

}) */

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