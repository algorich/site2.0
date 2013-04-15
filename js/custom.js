/* ------------------ Back To Top ------------------- */

$('#footer-menu-back-to-top a').click(function(){
    $('html, body').animate({ scrollTop:0 }, 300);
    return false;
});


/* ------------------ Tooltips ----------------- */

$(function() {
    // ALGORICH: changed default behaviour from template.
    $('.tip').tooltip({ html: true });
});