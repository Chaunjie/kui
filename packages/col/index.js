Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    col: {
    	type: [Number, String],
    	value: '24'
    },
    offset: {
    	type: [Number, String],
    	value: '0'
    }
  },

  methods: {
    onClick (e) {
      const data = e.currentTarget.dataset.item
      this.triggerEvent('click', data);
    }
  }
})
