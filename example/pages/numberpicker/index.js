
import Page from '../../common/page';

Page({
  data: {
    number: [1, 2, 3],
    config: {
      step: 1,
      min: 1,
      max: 20
    },
    config1: {
      step: 1,
      min: 1,
      max: 20,
      size: 'large'
    },
    config2: {
      step: 2,
      min: 1,
      max: 20
    }
  },

  onLoad() {}
});
