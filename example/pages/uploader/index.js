
import Page from '../../common/page';

Page({
  data: {
    imgTotal: 5,  // 可上传图片总数
    imgList: [  // 图片上传列表
      'http://a0.att.hudong.com/23/02/300000876508129592021450066_950.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1534301532&di=24ef71de1aa5a0cfd332302edaedd9d4&src=http://img4.duitang.com/uploads/item/201303/26/20130326111750_8mEnj.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312674356&di=302fedd307b810868a2c472d75cf5a60&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001oPD81zy7eKtwl69n95%26690',
      'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b21bb051f8198618b47f5dc149ed2e738bd4e6bf.jpg'
    ],
    imgWidth: 90,
    preview: true,
    showClose: true,
    imgCount: 2
  },
  removeImg (e) {
    const index = e.detail
    const { imgList } = this.data
    const list = [...imgList]
    list.splice(index, 1)
    this.setData({
      imgList: list
    })
  },
  addImg (e) {
    const imgArr = e.detail
    const { imgList } = this.data
    const list = [...imgList, ...imgArr]
    this.setData({
      imgList: list
    })
  },
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        const windowWidth = ~~res.windowWidth
        this.setData({
          imgWidth: (windowWidth - 20 - 30) / 4
        })
      }
    })
  }
});
