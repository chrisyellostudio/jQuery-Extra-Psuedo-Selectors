/*
jQuery Extra Psuedo Selectors

Copyright (c) 2015 Chris Rees. http://www.zesda.co.uk/
MIT Licensed: http://www.opensource.org/licenses/mit-license.php
Minified with: http://jscompress.com/
*/
!function(e){var t="color date datetime datetime-local email month number range search tel text time url week".split(" "),r=t.length;t.forEach(function(t){e.expr[":"][t]=function(e){for(var n=e.getAttribute("type"),a=0;r>a;a++)if(n===t)return!0;return!1}})}(jQuery);
