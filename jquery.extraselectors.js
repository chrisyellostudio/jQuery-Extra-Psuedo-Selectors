/*
jQuery Extra Psuedo Selectors

Copyright (c) 2015 Chris Rees. http://www.zesda.co.uk/
MIT Licensed: http://www.opensource.org/licenses/mit-license.php
*/
;(function($) {
    var t = 'color date datetime datetime-local email month number range search tel text time url week'.split(' '),
        l = t.length;

    t.forEach(function(e) {
        $.expr[':'][e] = function(el) {
            var _t = el.getAttribute('type');
            for (var i = 0; i < l; i++) {
                if( _t === e ) {
                    return true;
                }
            }
            return false;
        };
    });
})(jQuery);
