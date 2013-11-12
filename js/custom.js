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

$(function () {
    $.stellar();
});


/* --------------------- Tabs ------------------------ */

$(function() {
    var $tabsNav    = $('.tabs-nav'),
        $tabsNavLis = $tabsNav.children('li'),
        $tabContent = $('.tab-content');

    $tabsNav.each(function() {
        var $this = $(this);
        $this.next().children('.tab-content').stop(true,true).hide().first().show();
        $this.children('li').first().addClass('active').stop(true,true).show();
    });

    $tabsNavLis.on('click', function(e) {
        var $this = $(this);
        $this.siblings().removeClass('active').end().addClass('active');
        $this.parent().next().children('.tab-content').stop(true,true)
             .hide().siblings( $this.find('a').attr('href') ).fadeIn();
        e.preventDefault();
    });
});