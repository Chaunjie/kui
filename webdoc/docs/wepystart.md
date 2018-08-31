## 快速上手

### 使用之前

使用 kai-ui 前，务必要先阅读[小程序自定义组件开发](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

### 如何使用
#### 安装
##### 方式一. 通过 npm 安装 (推荐)
```bash
# npm
npm i kai-ui -S --production
```

##### 方式二. 下载代码

直接下载[GitHub](https://github.com/Chaunjie/kai-ui)或者通过 `git` 命令下载并把minparogram文件夹拷贝到自己项目中
```bash
git clone https://github.com/Chaunjie/kai-ui.git
```

### 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```javascript
import Panel from 'kai-ui/Panel'

components = {
  panel: Panel
}
```

接着就可以在 wxml 中直接使用组件

```html
<panel>使用kai-ui组件库开始</panel>
```

### 在开发者工具中预览

```bash
# 拉取代码
git clone https://github.com/Chaunjie/kai-ui.git

# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开开发者工具，把`dist`目录添加进去就可以预览示例了。
