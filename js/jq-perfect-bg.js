/**
 * jQuery.perfectBg
 * Based jQuery.fullBg Version 1.1 by c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
**/

(function($) {
 $.fn.perfectBg = function(){
    var bgImg = $(this);  	
    function resizeImg() {      
	    var imgwidth = bgImg.width();
      var imgheight = bgImg.height();
      var winwidth = $(window).width();
      var winheight = $(window).height();		
      var widthratio = winwidth / imgwidth;
      var heightratio = winheight / imgheight;
      var widthdiff = heightratio * imgwidth;
      var heightdiff = widthratio * imgheight;
      if(heightdiff>winheight) {
	    	 bgImg.css({
           width: winwidth+'px',
           height: heightdiff+'px'
         });
      } else {
         bgImg.css({
           width: widthdiff+'px',
           height: winheight+'px'
        });		
      }
      if(imgwidth>winwidth) {
  	    bgImg.css({'marginLeft' : ((winwidth - imgwidth)/2)+'px'});
	    }
	    else{
	      bgImg.css({'marginLeft' : 0+'px'});
	    }
	  }
	  resizeImg();
    $("#maincontent").show("slow", function() {
		  resizeImg();
		  bgImg.fadeIn("slow", function() {	 });		
	  });
    $(window).resize(function() {
		  bgImg.hide();
		  resizeImg();
      	bgImg.fadeOut("fast", function() {
			    resizeImg();
			    bgImg.fadeIn("fast", function() {		
				  resizeImg();
			  });		
	  	});
    }); 
   };
})(jQuery)
