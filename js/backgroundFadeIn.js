  $(document).ready(function () {
  $(window).scroll(function () {
      if ($(document).scrollTop() > 500) {
          $(".our-service").addClass("scrolled");
      } else {
          $(".our-service").removeClass("scrolled");
      }
    });
  });
