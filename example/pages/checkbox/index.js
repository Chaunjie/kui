Page({
  data: {
    checkbox: {
      type: 'circle',
      checked: false,
      label: '复选框内容',
      disabled: false
    },
    checkbox1: {
      type: 'circle',
      checked: false,
      label: '复选框内容',
      disabled: false
    },
    checkInfo: 'checked value false',
    checkInfo1: 'disabled value false'
  },

  change (e) {
    const { checkbox } = this.data
    const newObj = Object.assign({}, checkbox, { checked: e.detail })
    this.setData({
      checkInfo: 'checked value ' + e.detail,
      checkbox: newObj
    })
  },

  change1 (e) {
    const { checkbox1 } = this.data
    const newObj = Object.assign({}, checkbox1, { checked: e.detail, disabled: e.detail })
    this.setData({
      checkInfo1: 'disabled value ' + e.detail,
      checkbox1: newObj
    })
  },

  onLoad() {}
});
