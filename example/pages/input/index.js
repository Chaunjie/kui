
import Page from '../../common/page';

Page({
  data: {
    name: {
      label: '收货人',
      value: '小明',
      clear: true,
      placeholder: '名字'
    },
    disabled: {
      label: '用户信息',
      disabled: true,
      value: '该输入框已禁用',
      placeholder: '不可用输入框'
    },
    tel: {
      error: true,
      label: '联系电话',
      inputType: 'number',
      placeholder: '请输入手机号'
    },
    pwd: {
      label: '输入密码',
      inputType: 'password',
      placeholder: '请输入密码'
    },
    address: {
      label: '详细地址',
      type: 'textarea',
      maxlength: 20,
      placeholder: '请输入详细地址(最多20个字)'
    },
    clear: {
      label: '清除按钮',
      clear: true,
      adjust: true,
      value: '腹背受敌',
      placeholder: '带清除按钮'
    },
    notitle: {
      adjust: true,
      placeholder: '请输入收货人姓名'
    },
    filter: {
      adjust: true,
      label: '带正则',
      filter: '^(\\+?0?86?)?1[3456789]\\d{9}$',
      // filter: /^(\+?0?86?)?1[3456789]\d{9}$/,
      placeholder: '手机号码正则'
    }
  },

  onLoad() {}
});
