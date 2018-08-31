Page({
  data: {
    value1: 4,
    value2: 1,
    value3: 2,
    desc: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好'
    ]
  },
  rate1 (e) {
    this.setData({
      value1: e.detail
    })
  },
  rate2 (e) {
    this.setData({
      value2: e.detail
    })
  },
  rate3 (e) {
    this.setData({
      value3: e.detail
    })
  }
})