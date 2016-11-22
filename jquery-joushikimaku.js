(function($) {
  $.fn.joushikimaku = function() {
		$("<div>").css({
			position: "fixed",
		  top: 0,
		  left: 0,
		  margin: 0,
		  padding: 0,
		  width: "100%",
		  height: "100%",
		  "z-index": 99999,
		  "background-image": "-moz-linear-gradient(left, black, black 34%,orangered 34%,orangered 67%, darkgreen 67%)",
		  "background": "-webkit-linear-gradient(left, black, black 34%,orangered 34%,orangered 67%, darkgreen 67%)",
		  "background-image": "linear-gradient(left, black, black 34%,orangered 34%,orangered 67%, darkgreen 67%)",
		  "-moz-background-size": "10% 10%",
		  "-webkit-background-size": "150px 150px"
		}).click(function () {
			$(this).animate({
	      "margin-left": "100%"
	    }, 2000);
		}).appendTo('body');
    return this;
  };
})(jQuery);
