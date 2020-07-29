// pages/students/students.js
Page({
  data: {
    config: {
      content: [],
      titles: ['id', '名字', '年龄', '学校'],
      props: ['id', 'name', 'age', 'school'],
      columnWidths: ['80rpx', '140rpx', '120rpx', '390rpx'],
      border: true,
      stripe: true,
    },
    currentTab: 0
  },
  // 滑动切换tab 
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },

  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  onLoad: function (options) {
    // 模拟数据
    let content = [{
        id: 1,
        name: 'pxh',
        age: 13,
        school: '暨南大学计算机'
      },
      {
        id: 2,
        name: 'ap',
        age: 12,
        school: '中山大学'
      },
      {
        id: 3,
        name: 'cf',
        age: 12,
        school: '华南农业大学'
      },
      {
        id: 4,
        name: '林江',
        age: 14,
        school: '上海交通大学'
      }
    ]
    let that = this;
    that.setData({
      'config.content': content
    })
  }
})