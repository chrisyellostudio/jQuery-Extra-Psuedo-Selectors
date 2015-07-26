# jQuery Extra Psuedo Selectors
A simple add-on to jQuery to add extra psuedo selectors for the input types
available in HTML5.

This add-on was inspired by [Mark Dalgleish's article back in May 2011](http://markdalgleish.com/2011/05/jquery-selector-for-html5-input-types/).
After trying to find a simple add-on for jQuery I decided to write one myself to
use and share with others. The minified version weighs in at **462 bytes**, so
it's not going to slow down your browser too much.

Licensed under the MIT license so do with it as you please!

## Usage

### Simple
```
$('input:color')

// OR

$(':color')
```
Will select all elements which match `<input type="color">`.

### Complicated

```
$(':empty:search, :tel, :input:color')
```
This add-on can be combined with other psuedo selectors from **jQuery Extra
Psuedo Selectors** as well as the default selectors available within the
jQuery library.

## Browser Support
- Chrome
- Firefox
- Opera
- IE9+

## TODO
- Optimisation
- QUnit tests
- jsPerf tests
