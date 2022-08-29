$.ajax({
  type: "get",
  contentType:'application/json;charset=UTF-8',
  url: "../assets/js/temp.json",
  xhrFields: { //在ajax请求中设置发送cookie信息
      withCredentials: true
  },
  dataType: "json",
  data: {},
  success: function (data) {
    $('.knowledge_image').attr('src',data.knowledge.img)
    $('.list_container').html(template('knowledgeTpl',data.knowledge));
  }
});