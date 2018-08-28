export default class Toast{
  constructor (props={}) {
    this.options = {
      context: {},
      methods: ['loading', 'show', 'warning', 'success', 'error']
    }
  }

  init (ele) {
    const { options } = this
    const pages = getCurrentPages()
    const ctx = pages[pages.length - 1]
    const context = ctx.selectComponent('#' + ele)
    this.options.context = context
    this.createMethods()
  }

  createMethods () {
    const { options } = this
    options.methods.forEach(method => {
      this[method] = (res) => {
        options.context.show(res)
      }
    })
  }

  hide () {
    const { options } = this
    options.context.hide()
  }
}