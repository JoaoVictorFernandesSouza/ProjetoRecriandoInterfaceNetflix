jQuery(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 50) {
       $(".container-header").addClass("container-header-bg-color");
      } else {
       $(".container-header").removeClass("container-header-bg-color");
      }
    });
  });