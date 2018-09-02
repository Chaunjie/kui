webpackJsonp([6],{odMY:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("基础样式")]),s._v(" "),a("p",[s._v("基础样式是一些通用的样式，适用于页面基本样式, 通过class引用")]),s._v(" "),a("h3",[s._v("使用指南")]),s._v(" "),a("p",[s._v("在 app.wxss 中引入内置样式")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s._v("  @import "),a("span",{attrs:{class:"hljs-string"}},[s._v('"path/to/kai-ui/common/index.wxss"')]),s._v(";\n")])]),s._v(" "),a("h3",[s._v("代码演示")]),s._v(" "),a("h4",[s._v("样式使用")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 靠左对齐 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"text-pull-left font-content"')]),s._v(">")]),s._v("text-pull-left：靠左对齐"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 居中对齐 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"text-align-center font-content"')]),s._v(">")]),s._v("text-align-center：居中对齐"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 靠右对齐 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"text-pull-right font-content"')]),s._v(">")]),s._v("text-pull-right：靠右对齐"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("view")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 被删除的效果 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-12 color-gray text-deleted"')]),s._v(">")]),s._v("text-deleted：被删除的效果"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字号14 加粗 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-title font-bold"')]),s._v(">")]),s._v("font-14 font-bold：字号14 加粗"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字号16 加粗 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-16 color-title font-bold"')]),s._v(">")]),s._v("font-16 font-bold：字号16 加粗"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字体颜色 red --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-red"')]),s._v(">")]),s._v("color-red"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字体颜色 gray --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-gray"')]),s._v(">")]),s._v("color-gray"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字体颜色 blue --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-blue"')]),s._v(">")]),s._v("color-blue"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 字体颜色 success --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-success"')]),s._v(">")]),s._v("color-success"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 最多显示两行 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-title ellipsis-l2"')]),s._v(">")]),s._v("我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 最多显示一行 --\x3e")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"font-14 color-title ellipsis-l1"')]),s._v(">")]),s._v("我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符我是占位符"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("text")]),s._v(">")]),s._v("\n")])])])}]},n=a("VU/8")(null,l,!1,null,null,null);t.default=n.exports},zYnd:function(s,t,a){s.exports=a("odMY")}});
//# sourceMappingURL=6.65dc5dee1db30e926568.js.map