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
    nowTop: 0,
    scheduleList: [],
    dealScheduleList: []
  },
  ready: function () {
    const that = this
    let now = new Date();

    that.setData({
      nowTime: now.getHours() + ':' + (now.getMinutes() < 10 ? ('0' + now.getMinutes()) : now.getMinutes()),
      nowHeight: (now.getMinutes()>45)||(now.getMinutes()<15)? 50:20,
      nowTop: that.data.hourHeight * now.getHours() + that.data.hourHeight * now.getMinutes() / 60, //加0.5个底部线条高度
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
    // that.dealScheduleList()
    let testTime = {
      startTime: new Date('2021-05-18 00:33'),
      endTime: new Date('2021-05-18 00:40')
    }
    // console.log(that.inTime(that.data.scheduleList[1],that.data.scheduleList[7]))
    console.log(that.dealScheduleList())
  },
  methods: {
    dealScheduleList(){
      const that = this
      console.log(that.data.scheduleList)
      let scheduleList = that.data.scheduleList//定义局部变量数组（原数组）
      let scheduleLevelList = []//定义外层数组
      //循环，把日程列表一一放入新的二维数组
      for (let i = 0; i < scheduleList.length; i++) {// i为原日程数组索引
        let schedule = scheduleList[i]//定义原始时间范围元素
        let scheduleEventList = []//定义内层数组
        if (i==0) {//第一个，直接插入小数组
          scheduleEventList.push(schedule)
          scheduleLevelList.push(scheduleEventList)
          continue
        }
        let notInAllList = true//定义一个变量，记录原始元素是否在整个循环的日期内
        for (let j = 0; j < scheduleLevelList.length; j++) {// j为最终数组索引
          let scheduleLevel = scheduleLevelList[j]//scheduleLevel为小数组
          if (that.inLine(schedule,scheduleLevel)) {//在小数组元素的时间范围内，跳出小数组，进入下一个小数组循环

            // break
          }else{//小数组循环结束，不在小数组中，则把该原始元素加入该小数组中,进入下一个原始元素的判断
            scheduleLevelList[j].push(schedule)
            notInAllList = false
            // console.log(i+'---------'+j)
            break
          }
        }
        if (notInAllList) {
          scheduleEventList.push(schedule)
          scheduleLevelList.push(scheduleEventList)
        }
      }
      return scheduleLevelList
    },
    /**
     * 
     * @param {目标时间对象} targetTime 
     * @param {基础时间对象} baseTime 
     */
    inTime(targetTime,baseTime){
      if (targetTime.startTime.getTime()>baseTime.endTime.getTime()) {
        return false
      }else if (targetTime.endTime.getTime()<baseTime.startTime.getTime()) {
        return false
      }else{
        return true
      }
    },
    /**
     * 
     * @param {目标时间对象} targetTime 
     * @param {时间数组} lineList 
     */
    inLine(targetTime,lineList){
      const that = this
      for (let i = 0; i < lineList.length; i++) {
        const baseTime = lineList[i]
        if (that.inTime(targetTime,baseTime)) {
          return true
        }
      }
      return false
    }
  }
})