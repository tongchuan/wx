// miniprogram/pages/index/index.js
import DB from '../../api/userDb.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kaishi: "第一个测试程序",
    swiperLit: [
      { name: 'swiper1', title: '', url: '' },
      { name: 'swiper2', title: '', url: '' },
      { name: 'swiper3', title: '', url: '' },
      { name: 'swiper4', title: '', url: '' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    DB.getUserItem().then((data)=>{
      console.log(data)
    }).catch((error)=>{
      console.log(error)
    })
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})