# schedule_mini

#### 介绍
微信小程序。仿阿里钉钉日程中的时间区域控件 [https://gitee.com/chuangshixinchen/schedule_mini.git]

#### 软件架构
基于微信小程序的插件


#### 安装教程


#### 使用说明

1.  在需要使用的页面中的.json文件中，引入
    {
      "usingComponents": {
        "zyz-schedule": "../zyz-plugin/zyz-schedule"
      }
    }
2.  在.wxml文件中使用控件
    <zyz-schedule class="schedule" schedules="{{scheduleList}}" scheduleConfig="{{scheduleConfig}}" bind:scheduleClick="scheduleClick"/>
3.  配置参数和使用方式，请参考示例代码

#### 图例
![链接](/doc/picture.jpg)