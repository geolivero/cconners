var App = {}, $ = jQuery;


App.CC = function () {
    this.controllers();
};

App.CC.prototype.controllers = function () {
    $('#home .vid__holder').videoBG({
        position: 'fixed',
        loop: true,
        zIndex:-1,
        mp4:'/images/vids/home.mp4',
        ogv:'/images/vids/home.ogv',
        webm:'/images/vids/home.webm',
        poster:'/images/vids/home.jpg',
        opacity:0.3
    });

    $('.menu__btn').click(function (e) {
        var nav = $(e.currentTarget).closest('footer');
        nav[(nav.hasClass('open') ? 'remove' : 'add') + 'Class']('open');
        e.preventDefault();
    });

    $('.sharer__block span').click(function (e) {
        var nav = $(e.currentTarget).closest('div');
        nav[(nav.hasClass('open') ? 'remove' : 'add') + 'Class']('open');
        e.preventDefault();
    });

    $('.neon').neonText();
    $('.sharer__block').socialButtons({
        url: 'http://www.chrystalconners.com',
        title: 'Drag performer Chrystal Conners',
        image: 'http://www.chrystalconners.com/images/sharer.jpg',
        summary: 'A fishy drag for a profesional drag show'
    });
};

new App.CC();