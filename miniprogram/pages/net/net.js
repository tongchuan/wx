// miniprogram/pages/net/net.js
import DB from '../../api/netDb.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  getDataList(){
    DB.getListData({id:111,g:Math.random()}).then((data)=>{
      this.setData({
        listData: data.data
      })
    }).catch((error)=>{
      wx.showModal({
        title: 'error',
        content: JSON.stringify(error)
      })
    })
  },
  userConsole(event){
    console.log(event.target)
    console.log(event.currentTarget)
    let url = event.currentTarget.dataset.url;
    wx.navigateTo({ url })
  },
  getUserInfo(){
    wx.getUserInfo({
      withCredentials: false,
      lang: "zh_CN",
      success: (res)=>{
        wx.showModal({
          title: '',
          content: JSON.stringify(res),
        })

      },
      fail: (res)=>{
        wx.showModal({
          title: '',
          content: JSON.stringify(res),
        })
      },
      complete: (res) => {
        wx.showModal({
          title: '',
          content: JSON.stringify(res),
        })
      }
    })
  }
})