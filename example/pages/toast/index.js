import Toast from '../../dist/toast/index';

Page({
  data: {},
  show () {
    const options = {
      content: '纯文本的提示'
    }
    Toast.show(options)
  },
  loading () {
    const options = {
      content: '加载中的提示'
    }
    Toast.loading(options)
    setTimeout(() => {
      Toast.hide()
    }, 3000)
  },
  success () {
    const options = {
      content: '成功的提示'
    }
    Toast.success(options)
  },
  warn () {
    const options = {
      content: '警告的提示'
    }
    Toast.warning(options)
  },
  error () {
    const options = {
      content: '失败的提示'
    }
    Toast.error(options)
  },
  onLoad() {
    Toast.init('k-toast')
  }
});
