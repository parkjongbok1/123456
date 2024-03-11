$(document).ready(function () {
  // 각 섹션의 변수
  const sec1_offset = $(".sec01").offset().left; // left로 변경
  const sec2_offset = $(".portfolio").offset().left; // left로 변경
  // const sec3_offset = $(".sec03").offset().left; // left로 변경
  // const sec4_offset = $(".sec04").offset().left; // left로 변경
  // const sec5_offset = $(".sec05").offset().left; // left로 변경

  let contents_scrollLeft = 0; // scrollLeft으로 변경

  $(window).scroll(function () {
    const scrollLeft = $(this).scrollLeft(); // scrollLeft으로 변경
    contents_scrollLeft = scrollLeft - sec2_offset;

    // sec2
    if (scrollLeft > sec2_offset / 2) {
      //
    }
  });
});
