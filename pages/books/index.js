// pages/book.js
import {
  formatTime
} from '../../utils/util';
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uploaderList: [],
    uploaderNum: 0,
    bookList: [],
    submitActive: 0,
    name: '',
    studentId: '',
    date: formatTime(new Date(), 'YYYY/MM/DD'),
    time: formatTime(new Date(), 'HH:mm'),
    equipmentName: '显微镜',
    equipmentList: ['显微镜', '光刻机', '抛光机'],
    page: 0,
  },
  // 删除图片
  clearImg: function (event) {
    let bookList = this.data.bookList; //原数据
    let _id = event.currentTarget.id;
    let fileId = ''
    bookList = bookList.map(bootItem => {
      if (bootItem._id === _id) {
        fileId = bootItem.fileIds[0]
        bootItem.fileIds = []
        bootItem.uploaderList = []
        bootItem.showUpload = true
      }
      return bootItem
    })
    db.collection('books').doc(_id).update({
      data: {
        fileIds: [],
      }
    })
    if (fileId) {
      wx.cloud.deleteFile({
        fileList: [fileId],
        success: res => {
          // handle success
          console.log(['【删除图片】【成功】'], res.fileList)
        },
        fail: console.error
      })
    }
    this.setData({
      bookList
    })
  },
  //展示图片
  showImg: function (event) {
    var that = this;
    let bookList = this.data.bookList; //原数据
    let _id = event.currentTarget.id;
    let urls = []
    bookList.map(bootItem => {
      if (bootItem._id === _id) {
        urls = bootItem.uploaderList
      }
      return bootItem
    })
    console.log('preview url', urls)
    wx.previewImage({
      urls: urls,
      current: urls[0]
    })
  },
  //上传图片
  upload: function (e) {
    var that = this;
    wx.chooseImage({
      count: 1 - that.data.uploaderNum, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths[0];
        wx.cloud.uploadFile({
          cloudPath: 'images/' + formatTime(new Date(), 'YYYY-MM-DD_HH:mm:ss.png'), // 上传至云端的路径
          filePath: tempFilePaths, // 小程序临时文件路径
          success: res => {
            // 返回文件 ID
            console.log(res.fileID)
            db.collection('books').doc(e.currentTarget.id).update({
              data: {
                fileIds: [res.fileID],
              },
              success: result => {
                console.info('[数据库] [更新记录] 成功', result, e.currentTarget.id)
                let bookList = that.data.bookList
                bookList = bookList.map(f => {
                  if (f._id === e.currentTarget.id) {
                    f.fileIds = [res.fileID]
                    f.uploaderList = [tempFilePaths]
                    f.showUpload = false
                  }
                  return f
                })
                that.setData({
                  bookList
                })
              },
              fail: err => {
                console.error('[数据库] [更新记录] 失败：', err)
              }
            })
          },
          fail: console.error
        })
      }
    })
  },

  bindBookNameChange(event) {
    console.log('==name===>', event.detail.value)
    let submitActive = this.data.submitActive;
    try {
      for (const key of ['name', 'date', 'time', 'equipmentName', 'studentId']) {
        if (key === 'name' && !event.detail.value) {
          throw 'data is null'
        }
        if (key !== 'name' && !this.data[key]) {
          throw 'data is null'
        }
      }
      console.log('===error==>')

      if (submitActive === 0) {
        console.log('==set==submitActive==>', 1)
        submitActive = 1
      }
    } catch (error) {
      console.log('===error==>')
      if (submitActive !== 0) {
        console.log('==set==submitActive==>', 0)
        submitActive = 0
      }
    }

    this.setData({
      name: event.detail.value,
      submitActive: submitActive,
    })
  },

  bindBookStudentIdChange(event) {
    console.log('==studentId===>', event.detail.value)
    let submitActive = this.data.submitActive;
    try {
      for (const key of ['name', 'date', 'time', 'equipmentName', 'studentId']) {
        if (key === 'studentId' && !event.detail.value) {
          throw 'data is null'
        }
        if (key !== 'studentId' && !this.data[key]) {
          throw 'data is null'
        }
      }
      console.log('===error==>')

      if (submitActive === 0) {
        console.log('==set==submitActive==>', 1)
        submitActive = 1
      }
    } catch (error) {
      console.log('===error==>')
      if (submitActive !== 0) {
        console.log('==set==submitActive==>', 0)
        submitActive = 0
      }
    }

    this.setData({
      studentId: event.detail.value,
      submitActive: submitActive,
    })
  },

  bindBookDateChange(event) {
    console.log('===date==>', event.detail.value)
    this.setData({
      date: formatTime(event.detail.value, 'YYYY/MM/DD'),
    })
  },

  bindBookTimeChange(event) {
    console.log('===time==>', event.detail.value)
    this.setData({
      time: event.detail.value
    })
  },

  bindEquipmentChange(event) {
    console.log('===equipment==>', event.detail.value)
    this.setData({
      equipmentName: this.data.equipmentList[event.detail.value]
    })
  },

  formSubmit(event) {
    console.log('===formSubmit====>', event)
    if (this.data.submitActive === 0) {
      return
    }
    const data = {
      name: this.data.name,
      studentId: this.data.studentId,
      equipmentName: this.data.equipmentName,
      start: new Date(`${this.data.date} ${this.data.time}:00`),
      end: new Date(`${this.data.date} ${this.data.time}:00`),
      createTime: new Date()
    }
    this.insertBookItem(this, data)
  },

  insertBookItem(self, data) {
    db.collection('books').add({
      data
    }).then((res) => {
      self.fetchBookList(self)
    }).catch(error => {
      console.log('insert books data error', error)
      throw error
    })
  },

  fetchBookList(self) {
    const limit = 10
    const {
      page,
      bookList
    } = this.data
    console.log(`【申请表数量】： ${bookList.length},  页码：${page + 1}`)
    db.collection('books').orderBy('createTime', 'desc').skip(page * limit).limit(limit).get({
      success: function (res) {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]
        console.log('[获取预约申请表数据]', res)
        if (!res.data.length) {
          wx.showToast({
            title: '没有更多数据了',
            icon: 'none'
          })
          return;
        }
        let fileIds = []
        let data = [...bookList, ...res.data].map(e => {
          e.startTime = formatTime(e.start, 'YYYY/MM/DD HH:mm')
          e.endTime = formatTime(e.end, 'YYYY/MM/DD HH:mm')
          if (e.fileIds && e.fileIds.length > 0) {
            fileIds = [...fileIds, ...e.fileIds]
          }
          return e
        })
        console.log('[fileIds]', fileIds)

        if (fileIds.length) {
          wx.cloud.getTempFileURL({
            fileList: fileIds,
            success: res => {
              console.log('[fileList]', res.fileList)
              const map = new Map(res.fileList.map(e => [e.fileID, e.tempFileURL]))
              data = data.map(e => {
                e.uploaderList = []
                e.showUpload = true
                if (e.fileIds && e.fileIds.length) {
                  e.fileIds.map(fileId => {
                    const url = map.get(fileId)
                    if (url) {
                      e.uploaderList.push(url)
                      e.showUpload = false
                    }
                  })
                }
                return e
              })
              self.setData({
                bookList: data,
                page: page + 1
              })
              // this.loadGoodsList(true);
            },
            fail: console.error
          })
        } else {
          console.log("v:", data)
          data = data.map(e => {
            e.uploaderList = []
            e.showUpload = true
            return e
          })
          self.setData({
            bookList: data,
            page: page + 1
          })
        }

        wx.hideLoading();
      },
      fail: function (error) {
        console.log("error:", error)
      }
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('fresh')

    var that = this;
    that.setData({
      page: this.data.page + 1
    });
    //调用刷新时将执行的方法
    //0.5s加载显示，如果不加会一直显示加载中，造成不好的用户体验
    // var that = this
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(async function () {
      wx.showLoading({
        title: '加载中', //加载转圈显示
      });
      that.fetchBookList(this).then(() => {
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      });
    }, 500);

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('bottom');


    wx.showLoading({
      title: '加载中', //加载转圈显示
    });

    var that = this;
    this.fetchBookList(that);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.fetchBookList(this)
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
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})