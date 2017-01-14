//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    currenttabindex:1,
    currentcontentindex:1,
    imgUrls: [
      'http://inews.gtimg.com/newsapp_ls/0/617740567/0',
      'http://inews.gtimg.com/newsapp_ls/0/617742734/0',
      'http://inews.gtimg.com/newsapp_ls/0/369592609/0'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindChange:function(e){
    var that=this;
    console.log(e);
    var index=e.target.dataset.index;
    that.setData({
      currenttabindex:index,
      currentcontentindex:index,
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this;
    wx.request({
      url: 'http://op.juhe.cn/onebox/basketball/nba?key=d638786a3587a0bc696bd9043c88f4cf',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res);
        var result=res.data.result;
        var title=result.title.split('_腾讯体育')[0];
        var list=result.list;
        var statuslist=result.statuslist;
        console.log(list);
        console.log(result.statuslist);
        var listtr0=list[0].tr;
        var listtr1=list[1].tr;
        var listtr2=list[2].tr;
        var lives=list[1].live;
        var livelink=list[1].livelink;
        console.log(lives)
        console.log(listtr1);
        that.setData({
          result:result,
          title:title,
          list:list,
          statuslist:statuslist,
          listtr0:listtr0,
          listtr1:listtr1,
          listtr2:listtr2,
          live:lives,
          livelink:livelink,
        })
      },
      fail: function() {
        // fail
        console.log('fail')
      },
      complete: function() {
        // complete
      }
    })
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })
  },
  bindlink:function(e){
     console.log(e);
     var id=e.target.dataset.linkid;
     var url=this.data.livelink[id].url;
     console.log(url);
     wx.navigateTo({
       url: url,
       success: function(res){
         // success
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
  }
})
