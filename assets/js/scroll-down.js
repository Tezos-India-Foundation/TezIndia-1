$(function() {
  $(".scroll-down").click(function() {
    $("html, body").animate({ scrollTop: $("#one").offset().top }, "slow");
    return false;
  });
});
