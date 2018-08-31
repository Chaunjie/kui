Page({
  data: {
    item: {
      title: '普通样式',
      checked: true,
      disabled: false
    }
  },

  change (e) {
    const status = e.detail
    const { item } = this.data
    const newObj = Object.assign({}, item, { checked: status })
    this.setData({item: newObj})
  },

  onLoad() {}
});
