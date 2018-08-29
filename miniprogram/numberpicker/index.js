Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    num: { // 数值
      type: [Number, String],
      value: ''
    },
    size: {
      type: String,
      value: ''
    },
    step: {
      type: Number,
      value: 1
    },
    min: {
      type: Number,
      value: 1
    },
    max: {
      type: Number,
      value: 99999
    }
  },

  methods: {
    _handleMinueStep (e) {
      const dataset = e.currentTarget.dataset
      const { num, step, min } = this.data
      if (dataset.disabled) {
        return
      }
      if (num - step >= min) {
        this.setData({
          num: num - step
        })
      } else {
        this.setData({
          num: min
        })
      }
    },
    _handleBlur (e) {
      const { num, step, min, max } = this.data
      const value = +e.detail.value
      let newValue = value
      if (value < min) {
        newValue = min
      } else if (value > max) {
        newValue = max
      }
      this.setData({
        num: newValue
      })
    },
    _handlePlusStep (e) {
      const dataset = e.currentTarget.dataset
      const { num, step, max } = this.data
      if (dataset.disabled) {
        return
      }
      if (num + step <= max) {
        this.setData({
          num: num + step
        })
      } else {
        this.setData({
          num: max
        })
      }
    },
    onClick (e) {
      // const data = e.currentTarget.dataset.item
      this.triggerEvent('click');
    }
  }
})
