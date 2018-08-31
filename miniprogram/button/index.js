Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    name: {
    	type: String,
    	value: ''
    },
    size: {
    	type: String,
    	value: ''
    },
    disabled: {
    	type: Boolean,
    	value: false
    },
    empty: {
      type: Boolean,
      value: false
    }
  },

  methods: {
    onClick (e) {
      // const data = e.currentTarget.dataset.item
      this.triggerEvent('click');
    }
  }
})
