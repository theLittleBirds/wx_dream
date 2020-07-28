// pages/my/my.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
  } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
          this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
          })
      }
  } else {
  // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
          success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
          })
          }
      })
  } 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  aboutUs:function(){
    wx.showToast({
      title: '正在研发中。。。',
      image: '/image/icon_sport.png',  //image的优先级会高于icon
      // icon:'success',
      duration: 2000     
    })
  }
})