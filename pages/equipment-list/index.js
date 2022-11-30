// pages/equipment-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: 0,
    dataList: [{
      key: 0,
      list: [{
          name: '干缩养护箱',
          number: '20010421'
        }, {
          name: '混凝土搅拌机',
          number: '20031280'
        }, {
          name: '电动脱模机',
          number: '20050684'
        }, {
          name: '磁性振动台',
          number: '20111178'
        }, {
          name: '路面材料强度试验仪',
          number: '20120407'
        }, {
          name: '整体通风柜',
          number: '20170463'
        }, {
          name: '电动液压千斤顶',
          number: '20170490'
        }, {
          name: '沥青三氯乙烯回收仪',
          number: '20170501'
        }, {
          name: '三相异步电动液压机',
          number: '20190097'
        }, {
          name: '水泥胶砂搅拌机',
          number: '20191856'
        }, {
          name: '水泥胶砂搅拌机',
          number: '20191857'
        },
        {
          name: '混凝土快速冻融试验仪',
          number: '20191860'
        }, {
          name: '混凝土快速冻融试验仪',
          number: '20191861'
        },
      ]
    }, {
      key: 1,
      list: [{
          name: '压实沥青混合料密度测试仪',
          number: '20010420'
        },
        {
          name: '多功能脱模器',
          number: '20031279'
        },
        {
          name: '电子静水天平',
          number: '20050675'
        },
        {
          name: '电热鼓风干燥箱',
          number: '20050681'
        },
        {
          name: '恒温水浴',
          number: '20050682'
        },
        {
          name: '多功能电动击实仪',
          number: '20050683'
        },
        {
          name: '马歇尔电动击实仪',
          number: '20050685'
        },
        {
          name: '马歇尔电动击实仪',
          number: '20050686'
        },
        {
          name: '电动振筛机',
          number: '20050687'
        },
        {
          name: '旋转薄膜烘箱',
          number: '20050690'
        },
        {
          name: '双锤数控马歇尔击实仪',
          number: '20051217'
        },
        {
          name: '马歇尔稳定度仪',
          number: '20170461'
        },
        {
          name: '离心式沥青抽提仪',
          number: '20170489'
        },
        {
          name: '离心式沥青抽提仪',
          number: '20170502'
        },
        {
          name: '整体通风柜',
          number: '20170503'
        },
        {
          name: '沥青三氯乙烯回收仪',
          number: '20170504'
        },
        {
          name: '取芯机',
          number: '20170523'
        },
        {
          name: '全自动混合料拌和机',
          number: '20170532'
        },
        {
          name: '全自动混合料拌和机',
          number: '20170533'
        },
        {
          name: '水泥胶砂试体成型振实台',
          number: '20191855'
        },
        {
          name: '水泥净浆搅拌机',
          number: '20191858'
        },
        {
          name: '水泥净浆搅拌机',
          number: '20191859'
        }
      ]
    }, {
      key: 2,
      list: [{
          name: '万能材料试验机',
          number: '20170462'
        },
        {
          name: '洛杉矶磨耗机',
          number: '20170492'
        },
        {
          name: '燃烧法沥青含量测定仪',
          number: '20170497'
        },
        {
          name: '车辙试验机',
          number: '20170500'
        },
        {
          name: '独立伺服四点弯曲梁实验仪',
          number: '20170511'
        },
        {
          name: '微机控制电液伺服压力试验机',
          number: '20170516'
        },
        {
          name: '轮碾成型机',
          number: '20170517'
        },
      ]
    }, {
      key: 3,
      list: [{
          name: '雷达测速仪',
          number: '20050692'
        },
        {
          name: '雷达测速仪',
          number: '20051403'
        },
        {
          name: '雷达测速仪',
          number: '20051404'
        },
        {
          name: '含气量测定仪',
          number: '20051405'
        },
        {
          name: '含气量测定仪',
          number: '20170466'
        },
        {
          name: '含气量测定仪',
          number: '20170467'
        },
        {
          name: '含气量测定仪',
          number: '20170469'
        },
        {
          name: '沥青标准粘度计',
          number: '20170470'
        },
        {
          name: '沥青标准粘度计',
          number: '20170471'
        },
        {
          name: '混凝土贯入阻力仪',
          number: '20170472'
        },
        {
          name: '混凝土贯入阻力仪',
          number: '20170473'
        },
        {
          name: '混凝土贯入阻力仪',
          number: '20170484'
        },
        {
          name: '混凝土贯入阻力仪',
          number: '20170485'
        },
        {
          name: '电子静水天平',
          number: '20170486'
        },
        {
          name: '沥青混合料最大相对密度仪',
          number: '20170487'
        },
        {
          name: '全自动开口闪点测试仪',
          number: '20170534'
        },
        {
          name: '锚杆拉拔仪',
          number: '20170535'
        },
        {
          name: '锚杆拉拔仪',
          number: '20170536'
        },
        {
          name: '锚杆拉拔仪',
          number: '20170537'
        },
        {
          name: '锚杆拉拔仪',
          number: '20170538'
        },
        {
          name: '隧道激光断面仪',
          number: '20191847'
        },
        {
          name: '闭口闪电全自动检测仪',
          number: '20191848'
        },
        {
          name: '闭口闪电全自动检测仪',
          number: '20191849'
        },
        {
          name: '旋转粘度计',
          number: '20191862'
        },
        {
          name: '直读式混凝土含气量',
          number: '20191868'
        },
        {
          name: '直读式混凝土含气量',
          number: '20191869'
        },
        {
          name: '混凝土拌合物数显维勃稠度仪',
          number: '20191870'
        },
        {
          name: '混凝土拌合物数显维勃稠度仪',
          number: '20191871'
        },
        {
          name: '便携式碱含量快速测定仪',
          number: '20191872'
        },
        {
          name: '便携式碱含量快速测定仪',
          number: '20191873'
        },
        {
          name: '钢木实验台',
          number: '20201480'
        },
        {
          name: '钢木实验台',
          number: '20201481'
        },
        {
          name: '钢木实验台',
          number: '20201482'
        },
      ]
    }, {
      key: 4,
      list: [{
          name: '静态电阻应变仪',
          number: '20191850'
        },
        {
          name: '静态电阻应变仪',
          number: '20191851'
        },
        {
          name: '洛氏硬度仪',
          number: '20191852'
        },
        {
          name: '洛氏硬度仪',
          number: '20191874'
        },
        {
          name: '钢木实验台',
          number: '20191875'
        },
        {
          name: '钢木实验台',
          number: '20201477'
        },
        {
          name: '钢木实验台',
          number: '20201478'
        },
        {
          name: '混凝土多功能无损测试仪',
          number: '20201479'
        },
      ]
    }, {
      key: 5,
      list: [{
          name: '干缩养护箱',
          number: '20170464'
        },
        {
          name: '酸度计',
          number: '20170465'
        },
        {
          name: '酸度计',
          number: '20170468'
        },
        {
          name: '酸度计',
          number: '20170480'
        },
        {
          name: '酸度计',
          number: '20170481'
        },
        {
          name: '氯离子含量测定仪',
          number: '20170482'
        },
        {
          name: '氯离子含量测定仪',
          number: '20170483'
        },
        {
          name: '氯离子含量测定仪',
          number: '20170488'
        },
        {
          name: '氯离子含量测定仪',
          number: '20170491'
        },
        {
          name: '钢筋位置测定仪',
          number: '20170493'
        },
        {
          name: '钢筋位置测定仪',
          number: '20170494'
        },
        {
          name: '智能混凝土超声波检测仪',
          number: '20170495'
        },
        {
          name: '负压筛析仪',
          number: '20170496'
        },
        {
          name: '负压筛析仪',
          number: '20170498'
        },
        {
          name: '负压筛析仪',
          number: '20170499'
        },
        {
          name: '负压筛析仪',
          number: '20170524'
        },
        {
          name: '裂缝综合测定仪',
          number: '20170525'
        },
        {
          name: '裂缝综合测定仪',
          number: '20170526'
        },
        {
          name: '裂缝综合测定仪',
          number: '20170527'
        },
        {
          name: '裂缝综合测定仪',
          number: '20170528'
        },
        {
          name: '承载板及测力装置',
          number: '20170529'
        },
        {
          name: '承载板及测力装置',
          number: '20170530'
        },
        {
          name: '基桩动测仪',
          number: '20170531'
        },
        {
          name: '水泥混凝土标准养护箱',
          number: '20191853'
        },
        {
          name: '水泥混凝土标准养护箱',
          number: '20191854'
        },
      ]
    }, {
      key: 6,
      list: [{
          name: '沥青延度仪',
          number: '20191863'
        },
        {
          name: '电脑智能沥青针入度测定仪',
          number: '20191864'
        },
        {
          name: '电脑智能沥青针入度测定仪',
          number: '20191865'
        },
        {
          name: '智能沥青软化点测定仪',
          number: '20191866'
        },
        {
          name: '智能沥青软化点测定仪',
          number: '20191867'
        },
        {
          name: '路面弯沉仪',
          number: '20050673'
        },
        {
          name: '路面弯沉仪',
          number: '20050674'
        },
        {
          name: '连续式八轮平整度仪',
          number: '20050672'
        },
        {
          name: '静力触探仪',
          number: '20170474'
        },
        {
          name: '静力触探仪',
          number: '20170475'
        },
        {
          name: '恒温水浴',
          number: '20170522'
        },
        {
          name: '砂当量仪',
          number: '20170518'
        },
        {
          name: '砂当量仪',
          number: '20170519'
        },
        {
          name: '砂当量仪',
          number: '20170520'
        },
        {
          name: '砂当量仪',
          number: '20170521'
        },
        {
          name: '动力触探仪',
          number: '20170476'
        },
        {
          name: '动力触探仪',
          number: '20170477'
        },
        {
          name: '动力触探仪',
          number: '20170478'
        },
        {
          name: '动力触探仪',
          number: '20170479'
        },
        {
          name: '电动铺沙仪',
          number: '20170512'
        },
        {
          name: '电动铺沙仪',
          number: '20170513'
        },
        {
          name: '电动铺沙仪',
          number: '20170514'
        },
        {
          name: '电动铺沙仪',
          number: '20170515'
        },
        {
          name: '摆式摩擦系数测试仪',
          number: '20050688'
        },
        {
          name: '摆式摩擦系数测试仪',
          number: '20050689'
        },
        {
          name: '取芯机',
          number: '20170505'
        },
        {
          name: '路面材料强度试验仪',
          number: '20191846'
        },
        {
          name: '电磁式振动台试验机',
          number: '20160645'
        },
      ]
    }],
    current: {}
  },


  gotoDetail(e) {
    console.log('===goto equipment=item===>', e.currentTarget.id)
    wx.navigateTo({
      url: `/pages/equipment-item/index?number=${e.currentTarget.id}`,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      key
    } = options;
    console.log('==entry=key==>', key)
    this.setData({
      key: Number(key),
      current: this.data.dataList[Number(key)]
    });
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