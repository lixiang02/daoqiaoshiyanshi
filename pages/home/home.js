import {
  fetchHome
} from '../../services/home/home';
import {
  fetchGoodsList
} from '../../services/good/fetchGoods';
import Toast from 'tdesign-miniprogram/toast/index';

const db = wx.cloud.database()

Page({
  data: {
    imgSrcs: [],
    goodsList: [],
    goodsListLoadStatus: 0,
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    navigation: {
      type: 'dots'
    },
    tabList: [{
        text: '水泥混凝土实验室',
        key: 0,
        address: '博观楼A111',
        desc: '本实验室主要开设冻融试验、无侧限抗压强度试验、水泥砂浆试验等实验项目，还可以作为混凝土试件恒温恒湿养护场所。'
      },
      {
        text: '沥青混凝土实验室',
        key: 1,
        address: '博观楼A112',
        desc: '本实验室主要开设沥青含量抽提实验、沥青混合料马歇尔稳定度实验、取芯检测实验等实验项目。'
      },
      {
        text: '性能测试实验室1',
        key: 2,
        address: '博观楼A102',
        desc: '本实验室主要开设混凝土抗压强度实验、燃烧法测沥青含量实验、车辙实验、钢筋拉伸实验、钢筋握裹力实验、路面疲劳实验等实验项目。'
      },
      {
        text: '无损检测室',
        key: 3,
        address: '博观楼A208',
        desc: '本实验室主要开设水泥混凝土拌合物含气量检测实验、水泥混凝土凝结时间实验、沥青混合料最大相对密度实验、锚固力测定实验等实验项目。'
      },
      {
        text: '性能测试实验室2',
        key: 4,
        address: '博观楼A318',
        desc: '本实验室主要开设混凝土梁无损检测试验、应变片粘贴及应变测量技术试验、洛式硬度试验等实验项目。'
      },
      {
        text: '材料物化实验室',
        key: 5,
        address: '博观楼A506',
        desc: '本实验室主要开设路面渗水试验、氯离子含量测定试验、建筑材料酸碱度测定试验、钢筋标距试验、水泥细度筛析试验等实验项目。'
      },
      {
        text: '路基路面现场检测实验室',
        key: 6,
        address: '博观楼A505',
        desc: '本实验室主要开设路面弯沉实验、路面平整度、摩擦系数实验、地基承载力检测试验、路面材料强度试验、沥青三大指标试验等实验项目。'
      }
    ]
  },

  goodListPagination: {
    index: 0,
    num: 20,
  },

  privateData: {
    tabIndex: 0,
  },

  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    this.init();

  },

  onReachBottom() {
    if (this.data.goodsListLoadStatus === 0) {
      this.loadGoodsList();
    }
  },

  onPullDownRefresh() {
    this.init();
  },

  gotoDetail(e) {
    const {
      key
    } = this.data.tabList[Number(e.currentTarget.id)];
    console.log('=====goto=equipment-list=>', key)

    wx.navigateTo({
      url: `/pages/equipment-list/index?key=${key}`,
    });
  },

  init() {
    // this.loadHomePage();
    wx.stopPullDownRefresh();
    this.setData({
      pageLoading: true,
    });
    wx.cloud.getTempFileURL({
      fileList: ['cloud://prod-2gcewaht88d29918.7072-prod-2gcewaht88d29918-1313875438/images/图片1.png'],
      success: res => {
        console.log(res.fileList)
        this.setData({
          imgSrcs: [res.fileList[0].tempFileURL],
          pageLoading: false
        })
        // this.loadGoodsList(true);
      },
      fail: console.error
    })

  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({
      swiper,
      tabList
    }) => {
      this.setData({
        tabList,
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadGoodsList(true);
    });
  },

  tabChangeHandle(e) {
    this.privateData.tabIndex = e.detail;
    this.loadGoodsList(true);
  },

  onReTry() {
    this.loadGoodsList();
  },

  async loadGoodsList(fresh = false) {
    if (fresh) {
      wx.pageScrollTo({
        scrollTop: 0,
      });
    }

    this.setData({
      goodsListLoadStatus: 1
    });

    const pageSize = this.goodListPagination.num;
    let pageIndex =
      this.privateData.tabIndex * pageSize + this.goodListPagination.index + 1;
    if (fresh) {
      pageIndex = 0;
    }

    try {
      const nextList = await fetchGoodsList(pageIndex, pageSize);
      this.setData({
        goodsList: fresh ? nextList : this.data.goodsList.concat(nextList),
        goodsListLoadStatus: 0,
      });

      this.goodListPagination.index = pageIndex;
      this.goodListPagination.num = pageSize;
    } catch (err) {
      this.setData({
        goodsListLoadStatus: 3
      });
    }
  },

  goodListClickHandle(e) {
    const {
      index
    } = e.detail;
    const {
      spuId
    } = this.data.goodsList[index];
    wx.navigateTo({
      url: `/pages/goods/details/index?spuId=${spuId}`,
    });
  },

  goodListAddCartHandle() {
    Toast({
      context: this,
      selector: '#t-toast',
      message: '点击加入购物车',
    });
  },

  navToSearchPage() {
    wx.navigateTo({
      url: '/pages/goods/search/index'
    });
  },

  navToActivityDetail({
    detail
  }) {
    const {
      index: promotionID = 0
    } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});