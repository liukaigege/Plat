$.ajax({
  type: "get",
  contentType:'application/json;charset=UTF-8',
  url: "../assets/js/temp.json",
  xhrFields: { withCredentials: true },
  dataType: "json",
  data: {},
  success: function (data) {
    $('.operate_image').attr('src',data.operate.img)
    $('.list_container').html(template('operateTpl',data.operate));
  }
})
