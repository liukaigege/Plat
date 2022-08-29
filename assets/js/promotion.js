$(function () {
  $.ajax({
    type: "get",
    contentType: "application/json;charset=UTF-8",
    url: "../assets/js/homeTemp.json",
    xhrFields: {
      //在ajax请求中设置发送cookie信息
      withCredentials: true,
    },
    dataType: "json",
    data: {},
    success: function (data) {
      $("#targetList").html(template("targetListTemp", data.home));
      $("#releaseList").html(template("releaseListTemp", data.home));
    },
  });
  // 加载滚动动画
  $(window).scroll(animateLine);
});

function animateLine() {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();
  const elTop = $("#releaseList").offset().top; // #releaseList元素距离body元素顶部的距离
  const targetTop = $("#targetList").offset().top; // #targetList元素距离body元素顶部的距离
  if (scrollTop + windowHeight > elTop) {
    $(".line1").css({
      transform: `translateY(${(scrollTop + windowHeight - elTop) / 3}px)`,
    });
    $(".line2").css({
      transform: `translateY(${-(scrollTop + windowHeight - elTop) / 3}px)`,
    });
  }
  if (scrollTop + windowHeight - 550 > targetTop) {
    $("#targetList .icon-box").addClass("ani"); // 副标题弹出动画
  }
  // 全部滚动过，解除绑定
  //   if (scrollTop + windowHeight >= bodyHeight) {
  //     $(window).off("scroll", animateLine);
  //   }
}
