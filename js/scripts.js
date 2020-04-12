$(document).ready(function() {
  $(".clickDesign").click(function() {
    $(".showDesign").slideToggle();
    $(".hideDesign").slideToggle();
  });
  $(".clickDev").click(function() {
    $(".showDev").slideToggle();
    $(".hideDev").slideToggle();
  });
  $(".clickProduct").click(function() {
    $(".showProduct").slideToggle();
    $(".hideProduct").slideToggle();
  });
  $(".img").hover(function() {
    $(this).find(".projectName").toggle(400);
  });
});
