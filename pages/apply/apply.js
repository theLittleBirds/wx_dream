// pages/apply/apply.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    clientHeight: null,
    latitude: 23.099994,
    longitude: 113.324520,
    name: '',
    age: '',
    phone: '',
    polyline: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let markersData = [];
    let polylineData = [];
    wx.getLocation({
      type: "wgs84",
      success: function(res){
        polylineData = [{
            points:[
              {
                longitude: res.longitude,
                latitude: res.latitude
              },
              {
                longitude: 113.693091,
                latitude: 34.968361
              }
            ],
            color:"#FF0000DD",
            width: 2,
            dottedLine: false,
            arrowLine: true,
            borderWidth: 17
        }
      ]
      markersData = [{
        id: 0,
        latitude: res.latitude,
        longitude: res.longitude,
        iconPath: "/image/position.png",
        width: 50,
        height: 50,
        callout:{
          content:"当前位置：起点",
          bgColor:"#fff",
          padding:"5px",
          borderRadius:"2px",
          borderWidth:"1px",
          borderColor:"#07c160",
       }
      },{
         id: 1,
         latitude: 34.968361,
         longitude: 113.693091,
         iconPath: "/image/position_school.png",
         width: 50,
         height: 50,
         callout:{
           content:"学校名称:星梦之声少儿主持与口才\r\n姓名:柚子老师\r\n电话:15516601315",
           bgColor:"#fff",
           padding:"5px",
           borderRadius:"2px",
           borderWidth:"1px",
           borderColor:"#07c160",
        }
      }]
        that.setData({
         clientHeight: app.globalData.clientHeight,
         latitude: res.latitude,
         longitude: res.longitude,
         polyline:polylineData,
         markers:markersData
        })
      }
    })
  },
  name: function(e){
    this.setData({name:e.detail.value})
  },
  age: function(e){
    this.setData({age:e.detail.value})
  },
  phone: function(e){
    this.setData({phone:e.detail.value})
  },
  formSubmit: function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let that = this;
    const db = wx.cloud.database({});
    const cont = db.collection('student');
    cont.add({
      data:{
        name:that.data.name,
        age:that.data.age,
        phone:that.data.phone
      },
      success:function(res){
        wx.showToast({
          title: '预约成功',
          icon:'success',
          duration: 2000     
        })
      }
    })
  }

})