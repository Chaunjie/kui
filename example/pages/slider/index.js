Page({
  data: {
    value: 50,
    value1: 8,
    value2: [10, 60]
  },
  slider (e) {
    this.setData({
      value: e.detail
    })
  },
  slider1 (e) {
    this.setData({
      value1: e.detail
    })
  },
  slider2 (e) {
    this.setData({
      value2: e.detail
    })
  }
})