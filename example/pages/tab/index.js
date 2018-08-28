import Tab from '../../dist/tab/index';

Page({
  data: {
    tab1: {
      list: [{id: 1, title: '标签1'}, {id: 2, title: '标签2'}, {id: 3, title: '标签标签标签'}, {id: 4, title: '标签4'}, {id: 5, title: '标签5'}],
      scroll: false,
      selectedId: 2,
      class: 'tab-danger'
    },
    tab2: {
      list: [],
      scroll: false,
      selectedId: '',
      class: 'tab-success'
    },
    selectData: '点击第3块'
  },

  onClick (e) {
    this.setData({
      selectData: '点击第' + (e.detail + 1) + '块'
    })
  },

  onLoad() {
    const {tab2} = this.data
    const tabnew = Object.assign({}, tab2, {list: [{id: 1, title: '标签1'}, {id: 2, title: '标签2'}, {id: 3, title: '标签3'}, {id: 4, title: '标签4'}, {id: 5, title: '标签5标签标签'}, {id: 6, title: '标签6'}, {id: 7, title: '标签7'}, {id: 8, title: '标签8'}], selectedId: 3, scroll: true})
    Tab._init('#tab1', tabnew)
    Tab._init('#tab2', this.data.tab1)
  }
});
