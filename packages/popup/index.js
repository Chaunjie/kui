import Popup from './popup';

Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    show: {
      type: [Boolean, String],
      value: false
    },
    position: {
      type: String,
      value: 'bottom'
    },
    maskHide: {
      type: Boolean,
      value: true
    }
  },

  methods: {
    show () {
      this.setData({
        show: true
      })
    },
    hide () {
      this.setData({
        show: false
      })
    },
    togglePopup () {
      this.setData({
        show: !this.data.show
      })
    }
  }
})

const popup = new Popup()
export default popup;
