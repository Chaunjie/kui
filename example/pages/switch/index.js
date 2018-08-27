
import Page from '../../common/page';

Page({
  data: {
    items: [
      {
        title: '普通样式',
        checked: false,
        disabled: false,
      },
      {
        title: '禁选样式',
        checked: true,
        disabled: true,
      },
      {
        title: '异步样式',
        checked: false,
        disabled: false,
        sync: true,
        loading: false,
      }
    ],
    items1: [
      {
        checked: true,
        disabled: false,
        type: 'success',
      },
      {
        checked: true,
        disabled: false,
        type: 'kai',
      },
      {
        checked: true,
        disabled: false,
        type: 'danger',
      },
      {
        checked: true,
        disabled: false,
        type: 'warn',
      }
    ]
  },

  change (e) {
    const index = +e.currentTarget.dataset.index
    const { items } = this.data
    const status = e.detail
    const newArr = [...items]
    if (index === 2) {
      newArr[index].loading = true
      this.setData({
        items: newArr
      }, () => {
        setTimeout(() => {
          newArr[index].loading = false
          newArr[index].checked = status
          this.setData({items: newArr})
        }, 2000)
      })
    } else {
      newArr[index].checked = status
      this.setData({
        items: newArr
      })
    }
  },

  change1 (e) {
    const index = +e.currentTarget.dataset.index
    const { items1 } = this.data
    const status = e.detail
    const newArr = [...items1]
    newArr[index].checked = status
    this.setData({
      items1: newArr
    })
  },

  onLoad() {}
});
