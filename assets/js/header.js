$(function () {
  const navList = [
    {
      name: "首页",
      hrefUrl: "home.html",
      children: [
        // {
        //   name: "平台公告",
        //   hrefUrl: "index.html",
        // },
      ],
      detail: "platnotice.html",
    },
    {
      name: "建站服务",
      hrefUrl: "stationbuilding.html",
    },
    {
      name: "广告推广",
      hrefUrl: "promotion.html",
    },
    {
      name: "跨境支付",
      hrefUrl: "crossborderpay.html",
    },
    {
      name: "跨境供应链",
      hrefUrl: "supply.html",
    },
    {
      name: "运营服务",
      hrefUrl: "operate.html",
    },
    {
      name: "跨境物流",
      hrefUrl: "logistics.html",
      detail: "logisticsdetail.html",
    },
    {
      name: "知识产权服务",
      hrefUrl: "knowledge.html",
    },
    {
      name: "学习中心",
      hrefUrl: "study.html",
    },
  ];

  const isHome = !location.pathname.includes("/pages/");
  const beforeHref = isHome ? "./pages/" : "";
  let ulStr = "<ul class='nav-ul container'>";
  navList.forEach((item) => {
    item.childrenStr = "";
    if (item.children && item.children.length) {
      const mapStr = item.children
        .map(
          (p) =>
            `<li class="sub-list-item"><a href="${p.hrefUrl}">${p.name}</a></li>`
        )
        .join("");
      item.childrenStr = `<ul class="sub-list">${mapStr}</ul>`;
    }
    // 加上跳转前缀
    if (item.hrefUrl == "home.html") {
      item.hrefUrl = isHome ? "" : "../home.html";
    } else {
      item.hrefUrl = beforeHref + item.hrefUrl;
    }
    item.liStr = `<li class="${
      !!~window.location.href.indexOf(item.hrefUrl) ||
      !!~window.location.href.indexOf(item?.detail)
        ? "active"
        : ""
    }"><a class="sub-title" href="${item.hrefUrl}">${item.name}</a>${
      item.childrenStr
    }</li>`;
    ulStr += item.liStr;
  });
  ulStr += "</ul>";

  $("#platHeader").html(ulStr);
  // 头部导航栏下拉效果
  $(".nav-ul li").hover(function () {
    $(this).children(".sub-list").stop().slideToggle(300);
  });

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
      $("#platFooter").html(
        `<p class="footer-desc">${data.home.footer.descript}</p>`
      );
    },
  });
});
