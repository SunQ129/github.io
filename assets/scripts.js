(function($) {
  "use strict"; // Start of use strict

  // 滾動時的導航欄效果
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $("#mainNav").addClass("is-fixed");
    } else {
      $("#mainNav").removeClass("is-fixed");
    }
  });

})(jQuery); // End of use strict
