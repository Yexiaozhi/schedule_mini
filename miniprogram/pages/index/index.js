const plugin = requirePlugin('zyz-plugin')
Page({
  data: {
    items: [],
    currentItem: 0,
    scheduleList: [],
    scheduleConfig:{
      hourHeight:60,
      eventBgColor:"#666"
    }
  },
  onLoad() {
    plugin.sayHello()
    const world = plugin.answer
    this.setData({
      scheduleList: [{
          title: '标题asdasdassdfsdfsdfsdf',
          startTime: '2021-05-18 08:32',
          endTime: '2021-05-18 09:40'
        },
        {
          title: '标题2',
          startTime: '2021-05-18 08:59',
          endTime: '2021-05-18 09:58'
        },
        {
          title: '标题3',
          startTime: '2021-05-18 08:20',
          endTime: '2021-05-18 10:40'
        },
        {
          title: '标题4',
          startTime: '2021-05-18 09:10',
          endTime: '2021-05-18 11:40'
        },
        {
          title: '标题5',
          startTime: '2021-05-18 12:32',
          endTime: '2021-05-18 13:40'
        },
        {
          title: '标题6',
          startTime: '2021-05-18 05:21',
          endTime: '2021-05-18 14:40'
        },
        {
          title: '标题7',
          startTime: '2021-05-18 15:52',
          endTime: '2021-05-18 17:30'
        },
        {
          title: '标题8',
          startTime: '2021-05-18 14:11',
          endTime: '2021-05-18 19:10'
        },
        {
          title: '标题9',
          startTime: '2021-05-18 16:33',
          endTime: '2021-05-18 23:40'
        }
      ]
    })
    console.log(this.data.scheduleList)
  },
  scheduleClick(e) {
    console.log(e)
  },
  addItem() {
    this.data.items.push(this.data.currentItem++)
    this.setData({
      items: this.data.items,
      currentItem: this.data.currentItem
    })
  }
})