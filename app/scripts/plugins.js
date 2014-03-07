(function ($) {
    $.fn.neonText = function () {
        var NEON;

        NEON = function (el) {
            this.$el = $(el);
            this.time = 3;
            this.timer = null;
            this.colorIndex = 1;
            this.colorTotal = 4;
            this.$el.addClass('colors__txt');
            this.changeColor();
            this.controllers();
        };

        NEON.prototype.changeColor = function() {
            var i = 1;
            this.colorIndex = this.colorIndex >= this.colorTotal ? 1 : this.colorIndex + 1;
            while (i < this.colorTotal + 1) {
                this.$el.removeClass('colors__txt_' + i);
                i += 1;
            }
            this.$el.addClass('colors__txt_' + this.colorIndex);
        };

        NEON.prototype.controllers = function() {
            var self = this;
            this.timer = setInterval(function () {
                self.changeColor();
            }, this.time * 1000);
        };

        this.each(function () {
            new NEON(this);
        });
    };
}(jQuery));


(function ($) {
    $.fn.socialButtons = function (options) {
        var SOCIAL, defaults;

        defaults = $.extend({
            url: '',
            title: '',
            image: '',
            summary: ''
        }, options);

        SOCIAL = function (el) {
            this.$el = $(el);
            this.view();
        };

        SOCIAL.prototype.view = function() {
            var socialItems = {};
            socialItems.twitter = {
                url: 'https://twitter.com/intent/tweet?',
                query: 'text={{title}}&url={{url}}&related'
            };
            socialItems.facebook = {
                url: 'http://www.facebook.com/sharer.php?',
                query: 's=100&p[title]={{title}}&p[summary]={{summary}}&p[url]={{url}}&p[images][0]={{image}}'
            };
            socialItems.linkedin = {
                url: 'http://www.linkedin.com/shareArticle?',
                query: 'mini=true&url={{url}}&title={{title}}&summary={{summary}}'
            };
            socialItems.gplus = {
                url: 'https://plus.google.com/share?',
                query: 'url={{url}}'
            };
            socialItems.pinit = {
                url: '//www.pinterest.com/pin/create/button/?',
                query: 'url={{url}}&media={{image}}&description={{title}}'
            };

            this.$el.append('<ul class="social__list"></ul>');

            for (key in socialItems) {
                var q = socialItems[key].query, url = socialItems[key].url;

                q = q.replace('{{url}}', defaults.url);
                q = q.replace('{{image}}', defaults.image);
                q = q.replace('{{summary}}', defaults.summary);
                q = q.replace('{{title}}', defaults.title);
  
                this.$el.find('.social__list').append(
                    [
                        '<li class="' + key + '">',
                        '<a target="_blank" href="' + url + q +  '">',
                        key,
                        '</a>',
                        '</li>'
                    ].join("\n")
                );
            }
            
        };

        this.each(function () {
            new SOCIAL(this);
        });
    };
}(jQuery));