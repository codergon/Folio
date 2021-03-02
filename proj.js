$(document).ready(function () {
  $(window).mousemove(function (e) {
    var x = e.clientX;
    var y = e.clientY;
    $(".cursor").css({ transform: "translate(" + x + "px, " + y + "px)" });
  });
  $(".slid_elems1 .cursy").hover(
    function () {
      $(".cursor_media").css({ transform: "scale(1)" });
      $(".drag_cursor").css({ transform: "scale(0)" });
    },
    function () {
      $(".cursor_media").css({ transform: "scale(0)" });
      $(".drag_cursor").css({ transform: "scale(1)" });
    }
  );

  $(".slid_elems .item_overlay").hover(
    function () {
      $(".drag_cursor p").text("View");
      $(".drag_cursor").css({ borderColor: "#ff0000", color: "#fff" });
      $(".drag_cursor img").css({ display: "none" });
      $(".drag_cursor p").css({ transform: "scale(1.2)" });
    },
    function () {
      $(".drag_cursor p").text("Drag");
      $(".drag_cursor").css({ borderColor: "#2b2b2b", color: "#000" });
      $(".drag_cursor img").css({ display: "flex" });
      $(".drag_cursor p").css({ transform: "scale(1)" });
    }
  );

  $(".slid_elems").hover(
    function () {
      $(".drag_cursor").css({ transform: "scale(1)" });
      $(".cursor").css({ background: "transparent" });
    },
    function () {
      $(".drag_cursor").css({ transform: "scale(0)" });
      $(".cursor").css({ background: "#000" });
    }
  );

  $(".list.l1").click(function () {
    $(".personals").toggleClass("hidelist");
    $(this).toggleClass("activelist");
    $(this).siblings().removeClass("activelist");
    $(this)
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(-50%)" });
    $(this)
      .siblings()
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(0%)" });
    $(".sli_cont").css({ transform: "translateY(0%)" });
  });
  $(".list.l2").click(function () {
    $(this).toggleClass("activelist");
    $(".personals").addClass("hidelist");
    $(this).siblings().removeClass("activelist");
    $(this)
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(-50%)" });
    $(this)
      .siblings()
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(0%)" });
    $(".sli_cont").css({ transform: "translateY(-33.3333333%)" });
  });
  $(".list.l3").click(function () {
    $(this).toggleClass("activelist");
    $(".personals").addClass("hidelist");
    $(this).siblings().removeClass("activelist");
    $(this)
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(-50%)" });
    $(this)
      .siblings()
      .find(".indicators .indi_inn")
      .css({ transform: "translateX(0%)" });
    $(".sli_cont").css({ transform: "translateY(-66.6666666%)" });
  });

  $(".lst .list").click(function () {
    $(".slider_overlay").css({
      display: "flex",
    });
    function akay() {
      $(".slider_overlay").css({
        display: "none",
      });
    }
    setTimeout(akay, 1200);
  });
});
