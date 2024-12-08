<script>
  $(document).ready(function() {
    // Show the button when scrolling down
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('#scrollTopBtn').fadeIn();
      } else {
        $('#scrollTopBtn').fadeOut();
      }
    });

    // Scroll to the top when clicked
    $('#scrollTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
</script>
