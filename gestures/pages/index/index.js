//index.js
//获取应用实例
var app = getApp()
var img = ['../../images/jiandao.png','../../images/shitou.png','../../images/bu.png'];

var imgIndex=0;
Page({
  data: {
   imgPath:img[0],
   title:'start',
   isRunning:false
  },
  bindViewTap:function(){
    wx.navigateTo({
      url:'../logs/logs'
    })
  },
  //定时器要执行的函数
  change:function(e){
    //每调用一次就要让路径索引++；
    //然后判断，大于则让它回到原始，小则继续++
    //修改数据的时候要用setData，不然他的视图层好像是不改的。
    imgIndex++;
    if(imgIndex>2){
      imgIndex=0;
    }
    this.setData({
      imgPath: img[imgIndex]
    })
    console.log(this.imgPath)
    debugger;
  },
  //单击按钮要执行的函数，单击要执行的函数按钮，
  guess:function(e){
    //获取isRunning的值，然后判断是停止还是继续，清除计时器还是开启计时器
    let isRunning=this.data.isRunning;
    if(!isRunning){
      this.setData({
        title:'stop',
        isRunning:true
      });
      //开启计时器，当他是假的时候，每100ms调用一次
      this.timer=setInterval((function(){
        this.change()
      }).bind(this),500);
    }else{
      this.setData({
        title:'start',
        isRunning:false
      });
      this.timer&&clearInterval(this.timer);
    }
  }
})
