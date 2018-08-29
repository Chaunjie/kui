Page({
  data: {
    number: [1, 2, 3],
    config: {
      step: 1,
      min: 1,
      max: 20
    },
    config1: {
      step: 1,
      min: 1,
      max: 20,
      size: 'large'
    },
    config2: {
      step: 2,
      min: 1,
      max: 20
    }
  },

  change (e) {
    const num = e.detail
    const index = +e.currentTarget.dataset.index
    const { number } = this.data
    const arr = [...number]
    arr[index] = num
    this.setData({
      number: arr
    })
  },

  onLoad() {}
});
