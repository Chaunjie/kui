Page({
  data: {
    popData: [
      {
        showPopup: false,
        position: 'center',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'top',
        maskHide: false
      },
      {
        showPopup: false,
        position: 'right'
      },
      {
        showPopup: false,
        position: 'bottom'
      },
      {
        showPopup: false,
        position: 'left'
      }
    ]
  },
  onTap (e) {
    const status = e.detail
    const index  = +e.currentTarget.dataset.index
    const { popData } = this.data
    const newData = [...popData]
    newData[index].showPopup = status
    this.setData({
      popData: newData
    })
  },
  onClick (e) {
    const index  = +e.currentTarget.dataset.index
    const { popData } = this.data
    const newData = [...popData]
    newData[index].showPopup = true
    this.setData({
      popData: newData
    })
  },
  close (e) {
    const index  = +e.currentTarget.dataset.index
    const { popData } = this.data
    const newData = [...popData]
    newData[index].showPopup = false
    this.setData({
      popData: newData
    })
  },
  onLoad() {}
});
