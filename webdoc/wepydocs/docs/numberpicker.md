## NumberPicker 数字输入框

### 使用指南
在页面中引入组件
```javascript
import NumberPicker from 'kai-ui/NumberPicker'

components = {
  numberpicker: NumberPicker
}
```

### 代码演示

#### 初始化

```html
<template>
  <numberpicker :num.sync="item"/>
</template>
```

#### 案例
```javascript
<template>
  <view class="kai-content">
    <view class="bg-white padding-10">
      <view class="font-12">默认小尺寸样式</view>
      <!-- 单个数值处理 -->
      <picker :num.sync="item"/>
    </view>
    <view class="bg-white padding-10">
      <view class="font-12">大尺寸样式</view>
      <!-- 数组处理 -->
      <repeat for="{{list.data}}" index="index" item="item">
        <numberpicker :num="item" :index="index" :config="list.config"/>
      </repeat>
    </view>
    <button @tap="save">保存</button>
  </view>
</template>

<script>
  import wepy from 'wepy'
  import NumberPicker from 'kai-ui/NumberPicker'

  export default class NumberPickerPage extends wepy.page {
    data = {
      item: 1,
      list: {
        data: [5, 6, 7],
        config: {
          step: 1,
          min: 3,
          max: 10,
          size: 'large',
          callbackFn: 'listChange'
        }
      }
    }
    components = {
      picker: NumberPicker,
      numberpicker: NumberPicker
    }

    methods = {
      save () {
        console.log(this.item, this.list.data)
      }
    }

    events = {
      listChange (value, index) {
        this.list.data[index] = value
      }
    }
  }
</script>
```

### API

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| config | 配置，如果是数组repeat则必传 | `Object` |`-` | `{}` |
| num | 初始数值 | `Number` |`-` | `-` |
| index | 数值索引，如果是数组repeat则必传 | `Number` |`-` | `-` |

### config
API config 结构

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------------------|----------------------------|-----------|-----------|-------------|
| step | 加减步长 | `Number` |`-` | `1` |
| max | 最大值 | `Number` |`-` | `9999` |
| min | 最小值 | `Number` |`-` | `1` |
| size | 样式尺寸 | `String` |`small` `large` | `small` |
| callbackFn | 回调函数名，如果是数组repeat，需要手动处理回传结果 | `String` |`-` | `-` |
