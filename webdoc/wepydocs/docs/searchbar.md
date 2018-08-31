## SearchBar 搜索条

### 使用指南
在页面中引入组件
```javascript
import Searchbar from 'kai-ui/Searchbar'

components = {
  searchbar: Searchbar
}
```

### 代码演示

#### 初始化

```html
<template>
  <searchbar
    placeholder="文艺复古长裙"
    @bindsearch.user="searchEvent"
    @bindcancel.user="cancelEvent"
    />
</template>
```

#### 案例
```javascript
<template>
  <searchbar
    placeholder="文艺复古长裙"
    className="mytest"
    :datasource.sync="datasource"
    @bindsearch.user="searchEvent"
    @bindcancel.user="cancelEvent"
    />
</template>

<script>
  import wepy from 'wepy'
  import Searchbar from 'kai-ui/Searchbar'
  export default class SearchbarPage extends wepy.page {
    data = {
      historyKeys: '',
      datasource: [
        '优衣库女装',
        'apple',
        'Banana',
        'Orange'
      ]
    }
    components = {
      searchbar: Searchbar
    }
    methods = {
      searchEvent (value) {
        console.log('搜索关键词：' + value)
      },
      cancelEvent () {
        wx.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style lang="less">
  .mytest {
    .searchbar {
      .searchbar-form__wrap {
        border-radius:50px;
      }
      .searchbar-form__cancel {
        color:#4b0;
      }
    }
  }
</style>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| value | 当前值 | `String` |`-` | `-` |
| placeholder | 输入提示 | `String` |`-` | `-` |
| focus | 是否自动获取焦点 | `Boolean` |`false` `true` | `false` |
| maxlength | 最大长度 | `Number` |`-` | `9999` |
| datasource | 模糊搜索的数据来源 | `Array` |`-` | `-` |
| className | 自定义class | `String` |`-` | `-` |

### Event

| 事件名 | 说明 |
|---------------------|----------------------------|
| @bindsearch.user | 搜索条点击搜做按钮时触发，回传参数为输入框的值 |
| @bindcancel.user | 搜索条点击取消时触发，不回传参数 |