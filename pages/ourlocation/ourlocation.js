Page({
  data:{
    latitude: 23.099994,
    longitude: 113.324520
  },
  onLoad: function(){
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function(res){
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.setData({
         latitude: res.latitude,
         longitude: res.longitude,
         markers:[{
           id: 0,
           latitude: res.latitude,
           longitude: res.longitude,
           iconPath: "/image/position.png",
           width: 50,
           height: 50
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
        })
      }
    })
  },
  onReady: function(){

  }
})