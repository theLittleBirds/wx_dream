const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 网络请求封装
 * @author Chen Jindou
 * @param {*} url 
 * @param {*} data 
 * @param {*} method 
 */
function request(url, data = {}, method, msg) {
  // 是否需要显示加载中...
  if(msg){wx.showLoading({title: msg, mask: true});}
	// 使用Promise封装request请求
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      timeout: 20000,
      header: {
        'Content-Type': 'application/json'
      },
      success (res) {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject(res.errMsg);
        }
      },
      fail (err) {
        reject(err)
      },
      complete () {
        if(msg){
          wx.hideLoading();
        }
      }
    })
  });
}

module.exports = {
  request,
  formatTime: formatTime
}
