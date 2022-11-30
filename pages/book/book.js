// pages/book.js
import {
  formatTime,
  formatTimeAndAddTime
} from '../../utils/util';
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookList: [],
    submitActive: 0,
    name: '',
    studentId: '',
    startDate: formatTime(new Date(), 'YYYY/MM/DD'),
    startTime: formatTime(new Date(), 'HH:mm'),
    endDate: formatTime(new Date(), 'YYYY/MM/DD'),
    endTime: formatTimeAndAddTime(new Date(), 'HH:mm', 3),
    equipmentName: '',
    equipmentList: [],
    laboratoryName: '',
    tabList: [{
        text: '水泥混凝土实验室',
        key: 0,
        address: '博观楼A111',
        desc: '本实验室主要开设冻融试验、无侧限抗压强度试验、水泥砂浆试验等实验项目，还可以作为混凝土试件恒温恒湿养护场所。',
        equipmentList: [{
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
      },
      {
        text: '沥青混凝土实验室',
        key: 1,
        address: '博观楼A112',
        desc: '本实验室主要开设沥青含量抽提实验、沥青混合料马歇尔稳定度实验、取芯检测实验等实验项目。',
        equipmentList: [{
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
      },
      {
        text: '性能测试实验室1',
        key: 2,
        address: '博观楼A102',
        desc: '本实验室主要开设混凝土抗压强度实验、燃烧法测沥青含量实验、车辙实验、钢筋拉伸实验、钢筋握裹力实验、路面疲劳实验等实验项目。',
        equipmentList: [{
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
      },
      {
        text: '无损检测室',
        key: 3,
        address: '博观楼A318',
        desc: '本实验室主要开设混凝土梁无损检测试验、应变片粘贴及应变测量技术试验、洛式硬度试验等实验项目。',
        equipmentList: [{
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
      },
      {
        text: '性能测试实验室2',
        key: 4,
        address: '博观楼A208',
        desc: '本实验室主要开设水泥混凝土拌合物含气量检测实验、水泥混凝土凝结时间实验、沥青混合料最大相对密度实验、锚固力测定实验等实验项目。',
        equipmentList: [{
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
      },
      {
        text: '材料物化实验室',
        key: 5,
        address: '博观楼A506',
        desc: '本实验室主要开设路面渗水试验、氯离子含量测定试验、建筑材料酸碱度测定试验、钢筋标距试验、水泥细度筛析试验等实验项目。',
        equipmentList: [{
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
      },
      {
        text: '路基路面现场检测实验室',
        key: 6,
        address: '博观楼A505',
        desc: '本实验室主要开设路面弯沉实验、路面平整度、摩擦系数实验、地基承载力检测试验、路面材料强度试验、沥青三大指标试验等实验项目。',
        equipmentList: [{
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
      }
    ],
    laboratoryList: [],
  },
  bindBookNameChange(event) {
    console.log('==name===>', event.detail.value)
    let submitActive = this.data.submitActive;
    try {
      for (const key of ['name', 'studentId']) {
        if (key === 'name' && !event.detail.value) {
          throw 'data is null'
        }
        if (key !== 'name' && !this.data[key]) {
          throw 'data is null'
        }
      }

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
    console.log('===submitActive==>', submitActive)

    this.setData({
      name: event.detail.value,
      submitActive: submitActive,
    })
  },

  bindBookStudentIdChange(event) {
    console.log('==studentId===>', event.detail.value)
    let submitActive = this.data.submitActive;
    try {
      for (const key of ['name', 'studentId']) {
        if (key === 'studentId' && !event.detail.value) {
          throw 'data is null'
        }
        if (key !== 'studentId' && !this.data[key]) {
          throw 'data is null'
        }
      }

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
    console.log('===submitActive==>', submitActive)

    this.setData({
      studentId: event.detail.value,
      submitActive: submitActive,
    })
  },

  bindBookStartDateChange(event) {
    console.log('===date==>', event.detail.value)
    this.setData({
      startDate: formatTime(event.detail.value, 'YYYY/MM/DD'),
    })
  },

  bindBookEndDateChange(event) {
    console.log('===date==>', event.detail.value)
    this.setData({
      endDate: formatTime(event.detail.value, 'YYYY/MM/DD'),
    })
  },

  bindBookStartTimeChange(event) {
    console.log('===time==>', event.detail.value)
    this.setData({
      startTime: event.detail.value
    })
  },

  bindBookEndTimeChange(event) {
    console.log('===time==>', event.detail.value)
    this.setData({
      endTime: event.detail.value
    })
  },

  bindEquipmentChange(event) {
    console.log('===equipment==>', event.detail.value)
    this.setData({
      equipmentName: this.data.equipmentList[event.detail.value]
    })
  },

  bindLaboratoryChange(event) {
    console.log('===Laboratory==>', event.detail.value)
    let equipmentList = []
    let laboratoryName = this.data.laboratoryList[event.detail.value]
    let equipmentName = ''
    this.data.tabList.map((e) => {
      if (laboratoryName === e.text) {
        equipmentList = e.equipmentList.map(f => f.name)
        equipmentName = equipmentList[0]
      }
    })
    this.setData({
      laboratoryName,
      equipmentList,
      equipmentName,
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
      laboratoryName: this.data.laboratoryName,
      equipmentName: this.data.equipmentName,
      start: new Date(`${this.data.startDate} ${this.data.startTime}:00`),
      end: new Date(`${this.data.endDate} ${this.data.endTime}:00`),
      createTime: new Date()
    }
    this.insertBookItem(this, data)
  },

  insertBookItem(self, data) {
    db.collection('books').add({
      data
    }).then((res) => {
      wx.switchTab({
        url: `/pages/books/index`,
      });
      // self.fetchBookList(self)
    }).catch(error => {
      console.log('insert books data error', error)
      throw error
    })
  },

  fetchBookList(self) {
    db.collection('books').orderBy('createTime', 'desc').get({
      success: function (res) {
        // 输出 [{ "title": "The Catcher in the Rye", ... }]

        const data = [...res.data].map(e => {
          e.startTime = formatTime(e.start, 'YYYY/MM/DD HH:mm')
          e.endTime = formatTime(e.end, 'YYYY/MM/DD HH:mm')
          return e
        })
        console.log("v:", data)
        self.setData({
          bookList: data
        })
      },
      fail: function (error) {
        console.log("error:", error)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.fetchBookList(this)

    const laboratoryList = []
    let equipmentList = []
    let laboratoryName = ''
    let equipmentName = ''
    this.data.tabList.map((e, index) => {
      laboratoryList.push(e.text)
      if (index === 0) {
        laboratoryName = e.text
        equipmentList = e.equipmentList.map(f => f.name)
        equipmentName = equipmentList[0]
      }
    })
    this.setData({
      laboratoryList,
      laboratoryName,
      equipmentName,
      equipmentList,
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