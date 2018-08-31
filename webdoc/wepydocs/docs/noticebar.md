## NoticeBar 通知栏

### 使用指南
在页面中引入组件
```javascript
import NoticeBar from 'kai-ui/NoticeBar'

components = {
  noticeBar: NoticeBar
}
```

### 代码演示

#### 初始化

```html
<template>
  <noticeBar :text="longText" componentId="noticebar" ></noticeBar>
</template>
```

#### 案例
```javascript
<template>
  <noticeBar :text="longText" componentId="noticebar" ></noticeBar>
</template>
<script>
import NoticeBar from 'kai-ui/NoticeBar'
export default class Index extends wepy.page {
  components = {
    noticeBar: NoticeBar
  }
  data = {
    longText: '近日，俄空军苏-34战斗轰炸机部队在里海地区举行了反舰实弹攻击演练，其中罕见使用了Kh-31AD超音速反舰导弹，明显是针对先前美海军在环太军演中的反舰演习，本图集就此为您简析',
    icon: true,
    shotText: '美F35培训中心遭沙尘暴袭击'
  }
  onLoad () {
    this.$invoke('noticeBar', 'initNoticeBarScroll')
  }
}
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| text | 需要通知的信息（当宽度超过通知栏宽度时候会自动滚动) | `String` |`-` | `-` |
| icon | 是否前面带图标 | `Boolean  ` |`false` `true` | `false` |
| componentId | 组件id | `String` |`-` | `-` |

