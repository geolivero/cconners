var App = {}, $ = jQuery;


App.CC = function () {
    this.controllers();
    this.routes();
    Backbone.history.start();
};

App.CC.prototype.routes = function () {
    var r = Backbone.Router.extend({
        routes: {
            '': 'index',
            'bio': 'bio',
            'media': 'media',
            'booking': 'booking'
        },
        type: 'home',
        hide: function () {
            self = this;
            $('.container__block').each(function () {
                if ($(this).attr('id').indexOf(self.type) < 0) {
                    $(this).removeClass('show').removeClass('opaque');    
                }
            });
            
        },
        change: function (index) {
            var self = this;
            $('footer nav a').removeClass('current');
            $('footer nav li').eq(index).find('a').addClass('current');;
            $('.container__block').each(function () {
                if ($(this).attr('id').indexOf(self.type) < 0) {
                    $(this).addClass('opaque');
                }
            });
            this.timer = setTimeout(function (){
                self.hide();
            }, 1500);
        },
        index: function () {
            $('#home').addClass('show');
            this.type = 'home';
            this.change(0);
        },
        bio: function () {
            $('#bio').addClass('show');
            this.type = 'bio';
            this.change(1);
        },
        media: function () {
            $('#media').addClass('show');
            this.type = 'media';
            this.change(2);
        },
        booking: function () {
            $('#bookings').addClass('show');
            this.type = 'booking';
            this.change(3);
        }
    });

    new r();
};

App.CC.prototype.controllers = function () {
    $('#home .vid__holder').videoBG({
        position: 'fixed',
        loop: true,
        zIndex:-1,
        mp4:'/images/vids/home.mp4',
        ogv:'/images/vids/home.ogv',
        webm:'/images/vids/home.webm',
        opacity:0.3
    });
    $('#media .vid__holder').videoBG({
        position: 'fixed',
        loop: true,
        zIndex:-1,
        mp4:'/images/vids/traffic.mp4',
        ogv:'/images/vids/traffic.ogv',
        webm:'/images/vids/traffic.webm',
        opacity:0.6
    });
    $('#bookings .vid__holder').videoBG({
        position: 'fixed',
        loop: true,
        zIndex:-1,
        mp4:'/images/vids/art.mp4',
        ogv:'/images/vids/art.ogv',
        webm:'/images/vids/art.webm',
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

    $('.email').upscureEmail();

    // FB.api('/Cakesplaza/albums?fields=id,name', function(response) {
    //   for (var i=0; i < response.data.length; i++) {
    //     var album = response.data[i];
    //       if (album.name == 'Mobile Uploads'){
    //       FB.api('/'+album.id+'/photos', function(photos){
    //         console.log(photos);
    //         if (photos && photos.data && photos.data.length){
    //           for (var j=0; j<photos.data.length; j++){
    //             var photo = photos.data[j];
    //             // photo.picture contain the link to picture
    //             /*var image = document.createElement('img');
    //             image.src = photo.picture;
    //             document.body.appendChild(image);*/
    //           }
    //         }
    //       });

    //       break;
    //     }
    //   }
    // });
};

$(function () {
    new App.CC();
});
