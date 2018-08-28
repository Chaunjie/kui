
import Page from '../../common/page';
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
      type: 'loading',
      content: '加载中的提示'
    }
    Toast.loading(options)
    setTimeout(() => {
      Toast.hide()
    }, 1000)
  },
  success () {
    const options = {
      type: 'success',
      content: '成功的提示'
    }
    Toast.success(options)
  },
  warn () {
    const options = {
      type: 'warning',
      content: '警告的提示'
    }
    Toast.warning(options)
  },
  error () {
    const options = {
      type: 'error',
      content: '失败的提示'
    }
    Toast.error(options)
  },
  onLoad() {
    Toast.init('k-toast')
  }
});
