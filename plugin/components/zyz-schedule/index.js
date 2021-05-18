// plugin/components/zyz-schedule/index.js

Component({
  properties: {
    items: {
      type: Array,
      value: [],
      observer(newVal, oldVal, changedPath) {
        this.setData({
          items: newVal
        })
      }
    }
  },

  data: {
    hours: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    hourHeight: 60,
    nowTime: '0:00',
    nowHeight: 0,
    scheduleList: []
  },
  ready: function () {
    const that = this
    let now = new Date();
    that.setData({
      nowTime: now.getHours() + ':' + (now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes()),
      nowHeight: that.data.hourHeight * now.getHours() + that.data.hourHeight * now.getMinutes() / 60, //加0.5个底部线条高度
      scheduleList: [{
          startTime: new Date('2021-05-18 08:32'),
          endTime: new Date('2021-05-18 09:40')
        },
        {
          startTime: new Date('2021-05-18 08:59'),
          endTime: new Date('2021-05-18 09:58')
        },
        {
          startTime: new Date('2021-05-18 08:20'),
          endTime: new Date('2021-05-18 10:40')
        },
        {
          startTime: new Date('2021-05-18 09:10'),
          endTime: new Date('2021-05-18 11:40')
        },
        {
          startTime: new Date('2021-05-18 12:32'),
          endTime: new Date('2021-05-18 13:40')
        },
        {
          startTime: new Date('2021-05-18 05:21'),
          endTime: new Date('2021-05-18 14:40')
        },
        {
          startTime: new Date('2021-05-18 15:52'),
          endTime: new Date('2021-05-18 17:30')
        },
        {
          startTime: new Date('2021-05-18 14:11'),
          endTime: new Date('2021-05-18 19:10')
        },
        {
          startTime: new Date('2021-05-18 16:33'),
          endTime: new Date('2021-05-18 23:40')
        }
      ]
    })
    console.log(that.data.scheduleList)
  },
  methods: {

  }
})