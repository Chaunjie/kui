
import Dialog from '../../dist/dialog/index';

Page({
  data: {},
  onTap1 () {
    const options = {
      title: '删除订单提示',
      content: '确定要删除该订单吗？',
      type: 'muti',
      showVertical: true,
      buttons: [{
        text: '取消'
      }, {
        text: '确定',
        color: '#C59E6C'
      }]
    }
    Dialog.show('#k-dialog', options).then((value) => {
      console.log(value) // 0: 微信支付 1: 支付宝 2: 京东
    }, () => {
      console.log('reject')
    })
  },
  onTap () {
    const options = {
      title: '支付选择',
      content: '请选择一种支付方式',
      type: 'muti',
      showVertical: false,
      buttons: [{
        text: '微信支付',
        color: '#0EB00B'
      }, {
        text: '支付宝',
        color: '#48A9E9'
      }, {
        text: '京东',
        color: '#E45143'
      }]
    }
    Dialog.show('#k-dialog', options).then((value) => {
      console.log(value) // 0: 微信支付 1: 支付宝 2: 京东
    }, () => {
      console.log('reject')
    })
  },
  onTap2 () {
    const options = {
      title: '删除确认',
      content: '删除之后无法恢复',
      type: 'muti',
      showVertical: false,
      buttons: [{
        text: '取消'
      }, {
        text: '删除',
        color: '#E45143',
        sync: true
      }]
    }
    Dialog.show('#k-dialog', options).then((value) => {
      console.log(value) // 0: 删除
      if (value === 1) {
        setTimeout(() => {
          Dialog.reset('#k-dialog')
        }, 3000)
      }
    }, () => {
      console.log('reject')
    })
  },
  onLoad() {}
});
