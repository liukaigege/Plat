let page = {
  pageNo: 1,
  pageSize: 10
}
const id = tool.getParam('id')
renderFn()
function renderFn() {
  $.ajax({
    type: "get",
    contentType: 'application/json;charset=UTF-8',
    url: "../assets/js/temp.json",
    xhrFields: { withCredentials: true },
    dataType: "json",
    data: page,
    success: function (data) {
      const detail = data.study.list.filter(v=>v.id == id)[0]
      $('.detail_title').html(detail.title)
        .next().html(`<span>${detail.author}</span><span>|</span><span>${detail.time}</span>`)
        .next().html(detail.content)
        .next().html(template('studyDetailTpl', detail));
    }
  })
}