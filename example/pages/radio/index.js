Page({
  data: {
    radio: {
      type: 'circle',
      checked: false,
      label: '单选框内容',
      disabled: false
    },
    radio1: {
      type: 'circle',
      checked: false,
      label: '单选框内容',
      disabled: false
    },
    checkInfo: 'checked value false',
    checkInfo1: 'disabled value false'
  },

  change (e) {
    const { radio } = this.data
    const newObj = Object.assign({}, radio, { checked: e.detail })
    this.setData({
      checkInfo: 'checked value ' + e.detail,
      radio: newObj
    })
  },

  change1 (e) {
    const { radio1 } = this.data
    const newObj = Object.assign({}, radio1, { checked: e.detail, disabled: e.detail })
    this.setData({
      checkInfo1: 'disabled value ' + e.detail,
      radio1: newObj
    })
  },

  onLoad() {}
});
