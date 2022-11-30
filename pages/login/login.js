// pages/login/login.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginInfo: {}
  },
  //登录按钮触发的事件
  login() {
    let that = this
    //调用微信小程序的登录接口
    console.log('登录开始')
    wx.login({
      success(e) {
        that.data.loginInfo.code = e.code //拿到的code存储在data中
        wx.showModal({
          title: '温馨提示',
          content: '微信授权登录后才能正常使用小程序功能',
          cancelText: '拒绝',
          confirmText: '同意',
          success(sucessInfo) {
            //调用微信小程序的获取用户信息的接口
            wx.getUserProfile({
              desc: '用于完善用户资料', // 声明获取用户个人信息后的用途
              lang: 'zh_CN',
              success(info) {
                wx.showLoading({
                  title: '加载中', //加载转圈显示
                });
                //把获取到的信息复制到data中的loginInfo中
                that.data.loginInfo = Object.assign(that.data.loginInfo, info)
                //调用后台的接口，把所有整合的个人信息传过去
                // that.handlerLogin(that.data.loginInfo)
                console.log('登录成功', that.data.loginInfo);
                wx.cloud.callFunction({
                  name: 'getUserId',
                  success(cloudResult) {
                    console.log("fetch cloudfunction success", cloudResult.result)
                    db.collection('users').where({
                      openid: cloudResult.result.openid,
                    }).get({
                      success: function (res) {
                        console.log(`【获取用户数据】:`, res)
                        const user = res.data.length ? res.data[0] : null;
                        if (user) {
                          db.collection('users').doc(user._id).update({
                            data: {
                              name: that.data.loginInfo.userInfo.nickName,
                              avatarUrl: that.data.loginInfo.userInfo.avatarUrl,
                              modifiedTime: new Date()
                            },
                            success: function (res) {
                              console.log('更新用户完成');
                              wx.hideLoading();
                              wx.switchTab({
                                url: `/pages/home/home`,
                              });
                            },
                            fail: function (error) {
                              console.log(`【更新用户信息失败】${error}`)
                            }
                          })
                        } else {
                          db.collection('users').add({
                            data: {
                              openid: cloudResult.result.openid,
                              name: that.data.loginInfo.userInfo.nickName,
                              avatarUrl: that.data.loginInfo.userInfo.avatarUrl,
                              isAdmin: false,
                              createTime: new Date()
                            },
                            success: function (res) {
                              console.log('创建用户完成');
                              wx.hideLoading();
                              wx.switchTab({
                                url: `/pages/home/home`,
                              });
                            },
                            fail: function (error) {
                              console.log(`【创建用户信息失败】${error}`)
                            }
                          })
                        }
                      },
                      fail: function (error) {
                        console.log(`【获取用户信息失败】${error}`)
                      }
                    })
                  },
                  fail(error) {
                    console.log("fetch cloudfunction error", error)
                  }
                })

              },
              fail(e) {
                console.log('获取用户信息失败', e)
              }
            })
          },
          fail() {
            console.log("拒绝")
          },
          complete() {}
        })
      },
      fail(e) {
        console.log('fail', e)
        wx.showToast({
          title: '网络异常',
          duration: 2000
        })
        return
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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