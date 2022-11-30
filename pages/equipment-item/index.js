// pages/equipment-item/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: '',
    image: '',
    detailList: [{
      number: '20191846',
      fileId: 'cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片2.png',
      title: '路面材料强度综合测定仪',
      desc: '设备简介：该设备可进行土的回弹试验、无机结合料（顶面法）回弹试验、马歇尔试验、无侧限抗压强度试验、CBR 贯入试验。'
    }, {
      number: '20170518',
      fileId: 'cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片3.png',
      title: '细集料砂当量试验仪',
      desc: '设备简介：本仪器适用于测定天然砂、人工砂等各种细集料中所含的粘性土或杂质的含量，公称最大粒径不超过4.75mm。'
    }, {
      number: '20170519',
      fileId: 'cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片3.png',
      title: '细集料砂当量试验仪',
      desc: '设备简介：本仪器适用于测定天然砂、人工砂等各种细集料中所含的粘性土或杂质的含量，公称最大粒径不超过4.75mm。'
    }, {
      number: '20170520',
      fileId: 'cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片3.png',
      title: '细集料砂当量试验仪',
      desc: '设备简介：本仪器适用于测定天然砂、人工砂等各种细集料中所含的粘性土或杂质的含量，公称最大粒径不超过4.75mm。'
    }, {
      number: '20170521',
      fileId: 'cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片3.png',
      title: '细集料砂当量试验仪',
      desc: '设备简介：本仪器适用于测定天然砂、人工砂等各种细集料中所含的粘性土或杂质的含量，公称最大粒径不超过4.75mm。'
    }],
    current: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      number
    } = options;
    console.log('==entry=number==>', number)
    const current = this.data.detailList.filter(e => e.number === number)[0]
    if (!current) {
      return
    }

    wx.cloud.getTempFileURL({
      fileList: [current.fileId],
      success: res => {
        console.log(res.fileList)
        this.setData({
          image: [res.fileList[0].tempFileURL],
          number,
          current,
        })
      },
      fail: console.error
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})