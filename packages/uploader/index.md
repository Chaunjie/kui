## Uploader 上传

### 使用指南
在 `index.json` 中引入组件
```json
"usingComponents": {
  "k-uploader": "path/to/kai-ui/minicomponent/uploader/index"
}
```

### 代码演示

#### 初始化

```html
<k-uploader 
  imgList="{{ imgList }}" 
  imgWidth="{{ imgWidth }}" 
  total="{{ imgTotal }}"
  preview="{{ preview }}"
  showClose="{{ showClose }}"
  imgCount="{{ imgCount }}"
  bind:remove="removeImg"
  bind:add="addImg"/>
```

```javascript

Page({
  data: {
    imgTotal: 5,  // 可上传图片总数
    imgList: [  // 图片上传列表
      'http://a0.att.hudong.com/23/02/300000876508129592021450066_950.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1534301532&di=24ef71de1aa5a0cfd332302edaedd9d4&src=http://img4.duitang.com/uploads/item/201303/26/20130326111750_8mEnj.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534312674356&di=302fedd307b810868a2c472d75cf5a60&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F001oPD81zy7eKtwl69n95%26690',
      'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b21bb051f8198618b47f5dc149ed2e738bd4e6bf.jpg'
    ],
    imgWidth: 90,
    preview: true,
    showClose: true,
    imgCount: 2
  }
});

```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----------|-------------------------|-----------|-----------|-------------|
| imgList | 展示的图片列表 | `Array` | `自定义` | `[]` |
| total | 可上传图片总数 | `Number` | `自定义` | `0` |
| imgWidth | 图片、上传样式宽度 | `Number` | `自定义` | `90` |
| preview | 是否可预览图片 | `Boolean` | `true` `false` | `true` |
| showClose | 是否可显示删除按钮 | `Boolean` | `true` `false` | `true` |
| imgCount | 图片多选数量(total于imgList长度差值大于imgCount时有效) | `Number` | `自定义` | `1` |

### Event

| 事件名 | 说明 |
|-----------|-----------|
| bind:remove | 点击删除按钮触发, 参数是当前图片索引 |
| bind:add | 添加图片时触发, 参数是选择的图片数组 |

### 外部样式

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 组件根节点自定义类名 |

