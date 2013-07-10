jq-perfect-bg
=============

jquery-perfect-background

what does it do?
=============
maintains aspect ratio, center positioning, and scale after each window resize or orientation change.

on window resize the background is faded out and faded back in appropriately scaled and repositioned.


how does it work?
=============
include jquery library, this plugin, and call $("#background").perfectBg(); in your document.ready(). 

where #background is the CSS ID of your background image & your content goes inside div #maincontent.

```javascript
<script src="js/jquery.js"></script>
<script src="js/jq-perfect-bg.js"></script>
<script>
$(document).ready(function() {  
  $("#background").perfectBg();
});
</script>
```

required css
=============
```css
html, body {
  height:100%; 
  width:100%; 
  margin:0; 
  padding:0;
}

body {
  overflow:hidden;
}

#background
  {
  display:none;
  }

#maincontent 
  {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: none;
  }
```

where is it from?
=============
* modified from jQuery.fullBg 1.1
* Original Date: 02/23/2010 by c.bavota - http://bavotasan.com
* Dual licensed under MIT and GPL.  

just give me the demo!
=============
The index.html file in this github example:

http://danpopp.net/demos/jq-perfect-bg/

A mash-up integrating colorbox and navigation:

http://danpopp.net/demos/jq-perfect-bg-colorbox/
