
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
  	]
  },

  onLoad() {}
});
