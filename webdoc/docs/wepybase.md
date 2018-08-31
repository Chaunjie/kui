## 基础样式
基础样式是一些通用的样式，适用于页面基本样式, 通过class引用

### 使用指南

在 `app.wpy` 中引入基础样式
```javascript
  @import '../node_modules/kai-ui/src/less/index';
```

### 代码演示

#### 样式适用
```html

  <!-- 靠左对齐 -->
  <view class="text-pull-left font-content">text-pull-left：靠左对齐</view>

  <!-- 居中对齐 -->
  <view class="text-align-center font-content">text-align-center：居中对齐</view>

  <!-- 靠右对齐 -->
  <view class="text-pull-right font-content">text-pull-right：靠右对齐</view>

  <!-- 被删除的效果 -->
  <text class="font-12 color-gray text-deleted">text-deleted：被删除的效果</text>

  <!-- 字号14 加粗 -->
  <text class="font-14 color-title font-bold">font-14 font-bold：字号14 加粗</text>

  <!-- 字号16 加粗 -->
  <text class="font-16 color-title font-bold">font-16 font-bold：字号16 加粗</text>

  <!-- 字体颜色 red -->
  <text class="font-14 color-red">color-red</text>

  <!-- 字体颜色 gray -->
  <text class="font-14 color-gray">color-gray</text>

  <!-- 字体颜色 blue -->
  <text class="font-14 color-blue">color-blue</text>

  <!-- 字体颜色 success -->
  <text class="font-14 color-success">color-success</text>

  <!-- 最多显示两行 -->
  <text class="font-14 color-title ellipsis-l2">我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符</text>

  <!-- 最多显示一行 -->
  <text class="font-14 color-title ellipsis-l1">我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符</text>
```
