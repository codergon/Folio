$(document).ready(function () {
  let isDown;
  let pos;
  let diff;
  $(".inn_slide3").mouseleave(function () {
    isDown = false;
  });
  $(".inn_slide3").mouseup(function () {
    isDown = false;
  });
  $(".inn_slide3").mousedown(function (e) {
    isDown = true;
    where = e.pageX - $(this).offset().left;
    scrollLeft = $(this).scrollLeft();
  });
  $(".inn_slide3").mousemove(function (e) {
    if (!isDown) return;
    e.preventDefault();
    pos = e.pageX - $(this).offset().left;
    diff = pos - where;
    check = $(this).position().left + diff;
    docw = $(window).width() - $(".inn_slide3").width();
    docy = $(window).width() - $(".slid_elems").width();
    if (check <= 0 && check > docw - docy - 50) {
      $(this).css({ left: check + "px" });
    }
  });
});
