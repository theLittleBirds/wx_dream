//app.js
App({
  globalData: {
    userInfo: null,
    hasUserInfo: false,
    clientHeight: null,
    clientWidth: null
  },
  onLaunch: function () {
  
    /**
     * 初次加载判断网络情况
     * 无网络状态下根据实际情况进行调整
     */
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        if (networkType === 'none') {
          that.globalData.isConnected = false
          wx.showToast({
            title: '当前无网络',
            icon: 'loading',
            duration: 2000
          })
        }
      }
    });
    wx.getSystemInfo({
        success: res =>{
          this.globalData.clientHeight = res.windowHeight * 2,
          this.globalData.clientWidth = res.windowWidth * 2
        }
    });
    if(!wx.cloud){
      console.error('请使用2.2.3或以上的基础库以使用云能力')
    }else{
      wx.cloud.init({
        traceUser: true
      })
    }
    const db = wx.cloud.database({
      env: "dream-xmzs"
    });
  }
})