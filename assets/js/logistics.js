$.ajax({
  type: "get",
  contentType: 'application/json;charset=UTF-8',
  url: "../assets/js/temp.json",
  xhrFields: { withCredentials: true },
  dataType: "json",
  data: {},
  success: function (data) {
    $('.logistics_image').attr('src', data.logistics.img)
    $('.list_container').html(template('logisticsTpl', data.logistics));
  }
})
$('.list_container').on('click', '.container_list', function () {
  window.location.href = './logisticsdetail.html?id=' + $(this).data('id')
})