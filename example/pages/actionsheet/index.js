
import Page from '../../common/page';

Page({
  data: {
    acData: {
      show: false,
      actions: []
    },
    clickInfo: ''
  },

  onLoad() {},
  doSelect (e) {
    const index = +e.detail
    const { acData } = this.data
    this.setData({
      clickInfo: '点击了' + acData.actions[index].name + '按钮'
    })
  },
  onClick () {
    const { acData } = this.data
    const actions = [
      { name: '禁选' , disabled: true},
      { name: '删除', icon: 'trash', color: 'red' },
      { name: '分享', icon: 'share' }
    ]
    const newObj = {
      show: true,
      actions: actions
    }
    this.setData({
      acData: newObj
    });
  }
});
