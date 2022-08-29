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
      $("#sectionBanner").html(template("sectionBannerTemp", data.home));
      $(".section-news").html(template("sectionNews", data.home));
      $(".section-information").html(template("sectionInformation", data.home));
      initBanner();
    },
  });
});
