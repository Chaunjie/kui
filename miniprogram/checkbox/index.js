Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    type: {
      type: String,
      value: 'circle'
    },
    label: {
      type: String,
      value: '发生的吧'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    checked: {
      type: Boolean,
      value: false
    },
    position: {
      type: String,
      value: 'left'
    }
  },

  methods: {
    onTap () {
      const { checked, disabled } = this.data
      if (disabled) {
        return
      }
      this.setData({
        checked: !checked
      })
      this.triggerEvent('change', !checked)
    },
    onClick (e) {
      // const data = e.currentTarget.dataset.item
      this.triggerEvent('click');
    }
  }
})