$.ajax({
  type: "get",
  contentType:'application/json;charset=UTF-8',
  url: "../assets/js/temp.json",
  xhrFields: { withCredentials: true },
  dataType: "json",
  data: {},
  success: function (data) {
    $('.supply_image').attr('src',data.supply.img)
    $('.list_container').html(template('supplyTpl',data.supply));
  }
})
