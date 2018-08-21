
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
  	]
  },

  onLoad() {
    console.log(66666)
    this.setData({
      actions: [
        { name: '选项' },
        { name: '选项', subname: '禁用状态' },
        { name: '选项', loading: true },
        { name: '禁用选项', disabled: true }
      ]
    });
  }
});
