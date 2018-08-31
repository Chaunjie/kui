Page({
  data: {
    stepData1: {},
    stepData2: {},
    stepData3: {}
  },
  onLoad () {
    const steps = [
      {title: '已做完的', content: '2016-07-08'},
      {title: '正在做的', content: '2016-17-08'},
      {title: '即将要做的', content: '这是内容'},
      {title: '即将要做的', content: '2016-17-08'}
    ]
    let stepData1 = {
      steps: steps,
      current: 1
    }

    let stepData2 = {
      steps: steps,
      current: 1,
      direction: 'horizontal'
    }
    const steps3 = [
      {title: '已做完的', content: '2016-07-08', iconClass: 'step-icon-bre'},
      {title: '正在做的', content: '2016-17-08', iconClass: 'step-icon-train'},
      {title: '即将要做的', content: '2016-17-08', iconClass: 'step-icon-view'}
    ]
    let stepData3 = {
      steps: steps3,
      current: 1,
      direction: 'horizontal'
    }
    this.setData({
      stepData1: stepData1,
      stepData2: stepData2,
      stepData3: stepData3
    })
  }
})