
import Page from '../../common/page';
import Toptips from '../../dist/toptips/index';

Page({
  data: {},
  onClick () {
    Toptips.show('#toptips', {content: '自定义提示信息', duration: 3000})
  }
});
