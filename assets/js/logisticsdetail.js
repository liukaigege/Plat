const id = tool.getParam('id')
$.ajax({
  type: "get",
  contentType: 'application/json;charset=UTF-8',
  url: "../assets/js/temp.json",
  xhrFields: { withCredentials: true },
  dataType: "json",
  data: { id },
  success: function (data) {
    const {title, tips, content} = data.logisticsdetail.list.filter(v => v.id == id)[0]
    $('.title_container').html(title).next().html(tips).next().html(content)
  }
})