
import Page from '../../common/page';

Page({
  data: {
    selectData: {
      id: 0,
      list: [{name: '选择1'}, {name: '选择2'}, {name: '选择3'}],
      selectIndex: 0,
      type: 'success'
    },
    selectData1: {
      id: 1,
      list: [{name: '选择1'}, {name: '选择2'}, {name: '选择3'}],
      selectIndex: 1,
      type: 'danger',
      position: 'right'
    },
    selectInfo: '点击了 选择1'
  },

  onClick () {
    const { selectData1 } = this.data
    const newObj = Object.assign({}, selectData1, { position: selectData1.position === 'left' ? 'right' : 'left' })
    this.setData({
      selectData1: newObj
    })
  },

  select (e) {
    const index = e.detail
    const { selectData } = this.data
    this.setData({
      selectInfo: '点击了 ' + selectData.list[index].name
    })
  },

  onLoad() {}
});
