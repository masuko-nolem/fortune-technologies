(function($) {
  $(function() {
    $('.nav-toggle').click(function() {
      $('.nav-mobile-list').slideToggle();
    });
    $('.nav-toggle').click(function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);
