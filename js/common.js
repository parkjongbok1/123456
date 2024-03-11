// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 500) {
//       $(".header").addClass("active");
//     } else {
//       $(".header").removeClass("active");
//     }
//   });
// });

$(document).ready(function () {
  $(".menu_btn").click(function () {
    if ($(".menu_btn").hasClass("active")) {
      $(this).removeClass("active");
      $(".menu_btn").removeClass("active");
      $(".site_map").removeClass("active");
    } else {
      $(".menu_btn").addClass("active");
      $(".site_map").addClass("active");
      $(this).addClass("active");
    }
  });
});
