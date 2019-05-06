$('.issue').click(function(){
    layer.confirm('请选择你要发布的类型', {
        btn: ['二手回收','失物招领'] //按钮
      }, function(){
        location.href = 'issue.html'
      }, function(){
        location.href = 'issue.html'
      });
})