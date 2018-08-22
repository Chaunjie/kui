
import Page from '../../common/page';

Page({
  data: {
  	cellArr: [
      {
        title: '布局',
        list: [
          {
            title: 'Layout 布局',
            link: 'layout'
          },
          {
            title: 'Grid 宫格',
            link: 'grid'
          },
          {
            title: 'Cell 列表',
            link: 'cell'
          },
          {
            title: 'Panel 面板',
            link: 'panel'
          }
        ]
      },
      {
        title: '基础组件',
        list: [
          {
            title: 'Button 按钮',
            link: 'button'
          },
          {
            title: 'Icon 图标',
            link: 'icon'
          },
          {
            title: 'LoadMore 更多',
            link: 'loadmore'
          },
          {
            title: 'Loading 加载中',
            link: 'loading'
          },
          {
            title: 'Tag 标记',
            link: 'tag'
          },
          {
            title: 'Helper 基础样式',
            link: 'helper'
          }
        ]
      },
      {
        title: '导航组件',
        list: [
          {
            title: 'Popup 弹出层',
            link: 'popup'
          },
          {
            title: 'NoticeBar 通知栏',
            link: 'noticebar'
          },
          {
            title: 'Tab 标签',
            link: 'tab'
          }
        ]
      },
      {
        title: '操作提示组件',
        list: [
          {
            title: 'ActionSheet 操作盘',
            link: 'actionsheet'
          },
          {
            title: 'Toptips 顶部提示',
            link: 'toptips'
          },
          {
            title: 'Dialog 弹出框',
            link: 'dialog'
          },
          {
            title: 'Toast 轻提示',
            link: 'toast'
          }
        ]
      },
      {
        title: '表单组件',
        list: [
          {
            title: 'Uploader 上传',
            link: 'uploader'
          },
          {
            title: 'Select 选择',
            link: 'select'
          },
          {
            title: 'Checkbox 复选框',
            link: 'checkbox'
          },
          {
            title: 'Radio 单选框',
            link: 'radio'
          },
          {
            title: 'NumberPicker 数字输入框',
            link: 'numberpicker'
          },
          {
            title: 'Switch 开关',
            link: 'switch'
          },
          {
            title: 'Input 输入框',
            link: 'input'
          }
        ]
      },
      {
        title: '搜索组件',
        list: [
          {
            title: 'Searchbar 搜索框',
            link: 'searchbar'
          }
        ]
      }
    ]
  },

  onClick (e) {
  	const detail = e.currentTarget.dataset.item
  	wx.navigateTo({url: '../' + detail.link + '/index'})
  },

  onLoad() {}
});
