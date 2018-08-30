Page({
  data: {
    radioArr: [
      {
        type: 'circle',
        checked: false,
        label: '单选框内容1',
        disabled: false
      },
      {
        type: 'circle',
        checked: false,
        label: '单选框内容2',
        disabled: false
      },
      {
        type: 'circle',
        checked: false,
        label: '单选框内容3',
        disabled: false
      }
    ],
    radio2: {
      type: 'cube',
      checked: false,
      label: '单选框内容',
      disabled: false
    },
    radio1: {
      type: 'circle',
      checked: false,
      label: '控制禁用',
      disabled: false
    },
    checkInfo: 'checked value false',
    checkInfo1: 'disabled value false'
  },

  change (e) {
    const index = +e.currentTarget.dataset.index
    const status = e.detail
    const { radioArr } = this.data
    let newArr = radioArr.map((r) => {
      return {
        type: r.type,
        checked: false,
        label: r.label,
        disabled: r.disabled
      }
    })
    newArr[index].checked = status
    this.setData({
      radioArr: newArr
    })
  },

  change2 (e) {
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
