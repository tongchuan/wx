import config from './config.js'
export default {
  getListData(param) {
    return new Promise((resolve,reject)=>{
      wx.request({
        url: config.getNetListData,
        header: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify(param),
        method: "GET",
        dataType: "json",
        success: (data) => {
          resolve(data.data)
        },
        error: (err) => {
          wx.showModal({
            title: '',
            content: JSON.stringify(err),
          })
          reject(err)
        }
      })
    });
  }
}