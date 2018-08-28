
import Page from '../../common/page';

Page({
  data: {
    searchContent: ''
  },
  confirm (e) {
    this.setData({
      searchContent: '搜索词为 ' + e.detail
    })
  },
  cancel () {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad() {}
});
