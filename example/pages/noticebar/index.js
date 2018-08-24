
import Page from '../../common/page';

Page({
  data: {
    text1: '近日，俄空军苏-34战斗轰炸机部队在里海地区举行了反舰实弹攻击演练，其中罕见使用了Kh-31AD超音速反舰导弹，明显是针对先前美海军在环太军演中的反舰演习，本图集就此为您简析',
    longText: '',
    icon: true,
    shotText: '美F35培训中心遭沙尘暴袭击',
    status: false,
    iconTest: false
  },

  onLoad() {
    const text = '近日，俄空军苏-34战斗轰炸机部队在里海地区举行了反舰实弹攻击演练，其中罕见使用了Kh-31AD超音速反舰导弹，明显是针对先前美海军在环太军演中的反舰演习，本图集就此为您简析'
    setTimeout(() => {
      this.setData({
        longText: text
      })
    }, 100)
  },

  onClick () {    
    this.setData({
      status: !this.data.status,
      iconTest: !this.data.status
    })
  }
});
