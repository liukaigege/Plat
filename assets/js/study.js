let page = {
  pageNo: 1,
  pageSize: 10
}
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
      if (page.pageNo === 1)
        $('.study_image').attr('src', data.study.img).next().html(template('studyTpl', data.study));
      else 
        $('.study_container').append(template('studyTpl', data.study));
      $('.loading_btn').removeClass('textColor')
      if (data.study.total === $('.study_container').find('.container_list').length) $('.loading_container').hide()
    }
  })
}

$('.loading_btn').on('click', function () {
  page.pageNo++
  $(this).addClass('textColor')
  renderFn()
})
$('.study_container').on('click','.container_list',function(){
  window.location.href = './studydetail.html?id=' + $(this).data('id')
})