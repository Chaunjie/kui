
import Page from '../../common/page';

Page({
  data: {
  	types: [
  		{
        type: 'plain',
        text: '默认'
      },
      {
        type: 'primary',
        text: '返现'
      },
      {
        type: 'danger',
        text: '会员折扣',
        empty: true
      },
      {
        type: 'warn',
        text: '返现'
      },
      {
        type: 'disabled',
        text: '返现不可用'
      }
  	],
    item: {
      title: '普通样式',
      checked: true,
      disabled: false
    }
  },

  change (e) {
    const status = e.detail
    const { item } = this.data
    const newObj = Object.assign({}, item, { checked: status })
    this.setData({item: newObj})
  },

  onLoad() {}
});
