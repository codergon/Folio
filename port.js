$(document).ready(function () {
  let isDown;
  let pos;
  let diff;
  $(".inn_slide").mouseleave(function () {
    isDown = false;
  });
  $(".inn_slide").mouseup(function () {
    isDown = false;
  });
  $(".inn_slide").mousedown(function (e) {
    isDown = true;
    where = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  });
  $(".inn_slide").mousemove(function (e) {
    if (!isDown) return;
    e.preventDefault();
    pos = e.pageX - $(this).offset().left;
    diff = pos - where;
    check = $(this).position().left + diff;
    docw = $(window).width() - $(this).width();
    docy = $(window).width() - $(".slid_elems").width();
    console.log($(window).width(), $(this).width(), docw, -docy);
    if (check <= 0 && check > docw - docy - 50) {
      $(this).css({ left: check + "px" });
    }
  });

  $(".menu-but").click(function (e) {
    if ($(".main").width() <= 520) {
      $(".menu_options_small").toggleClass("noshow");
      $(".logo").toggleClass("fix_logo");
    } else {
      $(".menu_options").toggleClass("noshow");
    }
  });
  $(".close_menu").click(function (e) {
    $(".menu_options_small").toggleClass("noshow");
    $(".logo").toggleClass("fix_logo");
  });
});
