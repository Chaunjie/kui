import Popup from '../../dist/popup/index';
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
  onClick (e) {
    const index  = +e.currentTarget.dataset.index
    Popup.show('#popup-'+index)
  },
  close (e) {
    const index  = +e.currentTarget.dataset.index
    Popup.hide('#popup-'+index)
  },
  onLoad() {}
});
