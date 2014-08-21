# JCF - JavaScript Custom Forms

## Browser support

The script was tested in the following browsers:

 - Internet Explorer 8+
 - Firefox
 - Chrome
 - Safari
 - Opera
 - Windows RT Tablets
 - Android 4+
 - iOS7+


## Usage
The script requires [jQuery framework](http://jquery.com/) to work properly. To add script in your page simply attach core file - `jcf.js` and some of modules you want to customize:</p>

```html
<script src="js/jquery-1.11.1.js"></script>
<script src="js/jcf.js"></script>
<script src="js/jcf.select.js"></script>
<script src="js/jcf.radio.js"></script>
<script src="js/jcf.checkbox.js"></script>
```

When the page is loaded all you have to do is simply call function:

```js
$(function() {
	jcf.replaceAll();
});
```

## License

This script is licensed under the [MIT License](LICENSE.txt).

Copyright 2014 [PSD2HTML](http://psd2html.com)