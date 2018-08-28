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
        text: '会员折扣'
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
    types1: [
      {
        type: 'plain',
        text: '默认',
        empty: true
      },
      {
        type: 'primary',
        text: '返现',
        empty: true
      },
      {
        type: 'danger',
        text: '会员折扣',
        empty: true
      },
      {
        type: 'warn',
        text: '返现',
        empty: true
      },
      {
        type: 'disabled',
        text: '返现不可用',
        empty: true
      }
    ]
  },

  onLoad() {}
});
