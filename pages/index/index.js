//index.js
//获取应用实例
const app = getApp()

Page({
  
  data: {

    clientHeight: null,

    //轮播图配置
    swiperOptions: {
      indicatorDots: true,
      indicatorColor: '#fff',
      autoplay: true,
      interval: 3000,
      circular: true
    },
    // 轮播图数据
    bannerData: [{
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_20200702124151.jpg'
      },
      {
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_202007021241511.jpg'
      },
      {
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_202007021241512.jpg'
      },
      {
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_202007021241513.jpg'
      },
      {
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_202007021241514.jpg'
      },
      {
        imgUrl: 'cloud://dream-xmzs.6472-dream-xmzs-1302551014/banner/微信图片_202007021241515.jpg'
      }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.setData({
      clientHeight: app.globalData.clientHeight
   }),
   wx.login({
    success: function(res){
      // success
      console.log(res.code)       
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  })
  },
  dianji: function(){
    wx.login({
      success: function(res){
        // success
        console.log(res.code)       
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getCode: function(){
    wx.login({
      success: function(loginRes){
        console.log(loginRes.code) 
      }
    })
  },
  getUserInfo: function(){
    wx.getUserInfo({
      success: function(res){
        var encryptedData = res.encryptedData
        var rawData = res.rawData
        var sign = res.signature
        var iv = res.iv
        console.log(encryptedData)
        console.log(rawData)
        console.log(sign)
        console.log(iv)
      }
    }) 
  }
})