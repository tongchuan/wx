import config from './config.js'
export default  {
  getUserItem() {
    return new Promise((resolve, reject)=>{
      resolve({
        "name": "张彤川",
        "age": 30
      })
      // wx.request({
      //   url: `${config.getUserItem}`,
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   method: "POST",
      //   data: {},
      //   dataType: "json",
      //   success: (data) => {
      //     console.log(data)
      //     resolve(data)
      //   },
      //   error: (err) => {
      //     console.log(erro)
      //     reject("")
      //   }
      // })
    })
    
  }
}