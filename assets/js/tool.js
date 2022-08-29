var renders = {
  // 动态渲染js文件
  js: list => {
    const t = Date.now()
    list.forEach(v => {
      document.write("<script src=../assets/js/" + v + ".js?v=" + t + "><\/script>")
    })
  },
  // 动态渲染css文件
  css: list => {
    const t = Date.now()
    var head = document.getElementsByTagName('head')[0];
    list.forEach(v => {
      var link = document.createElement('link');
      link.href = "../assets/css/" + v + ".css?v=" + t;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      head.appendChild(link);
    })
  }
}

var tool = {
  // 动态获取url参数
  getParam: key => {
    var param = null;
    var valus = new RegExp(key + "=(([^\\s&(#!)])+)").exec(window.location.href);
    if (valus && valus.length >= 2) {
      param = valus[1];
    }
    return param;
  }
} 

// <strong style=\"margin-bottom: 20px;display: block;\"></strong>
// <p style=\"text-indent: 2em;color: #333;margin-bottom: 20px;\"></p>
// <img style=\"width: 60%;margin: 0 auto;\" src=\"../assets/images/\">