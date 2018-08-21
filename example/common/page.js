export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'Kai-ui 组件库演示'
      };
    },
    ...options
  });
}
