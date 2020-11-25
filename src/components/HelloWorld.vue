<template>
  <div>
    <div>Hello World</div>
    <div>{{count}}</div>
    <button @click="setTime">开始计时</button>
    <button @click="closeTime">停止计时</button><br><br><br>
    <div>
      alarmName: {{alarmName}}<br>
      <button @click="changeNameByMut('同步(我是hellow中的数据)')">用mutations改变name</button>
      <button @click="changeNameByAct('异步(我是hellow中的数据)')">用actions改变name</button><br><br><br>
    </div>
    <div>
      vmName: {{vmName}}<br>
      <button @click="changeNameOfSync">用mutations改变name</button>
      <button @click="changeNameOfAsyn">用actions改变name</button><br><br><br>
    </div>
    <div>
      <button @click="toGame">通过this.$router.push进行页面跳转</button><br><br>
      <router-link to="/snake">
        <button>通过router-link进行页面跳转</button>
      </router-link> 

      <button @click="toFlex">to flex</button><br><br>
      
      <button @click="toTab">to tab</button><br><br>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',

  data () {
    return {
      timer: null
    }
  },

  computed: {
    // 写法一：
    // ...mapGetters('vmDatas', {
    //   'count': 'getTimer'
    // }),

    // 写法二：
    ...mapGetters({
      // 'count': 'vmDatas/getTimer',
      'alarmName': 'alarmData/getVmName',
      'vmName': 'vmDatas/getVmName'
    }),

    // mapState
    ...mapState('vmDatas', {
      'count': 'time'
    })
  },

  methods: {
    // ...mapMutations({
    //   changeTime: 'vmDatas/changeTime'
    // }),
    ...mapMutations('vmDatas', {
      changeTime: 'changeTime',
      changeVmNameByMut: 'changeVmName'
    }),

    ...mapMutations({
      changeNameByMut: 'alarmData/changeVmName'
    }),

    ...mapActions({
      changeVmNameByAct: 'vmDatas/changeVmName',
      changeNameByAct: 'alarmData/changeVmName'
    }),

    changeNameOfSync () {
      this.changeVmNameByMut('同步(我是hellow中的数据)')
      console.log('我是同步之后的函数: ', this.vmName)
    },

    // 这里使用一下异步调用
    changeNameOfAsyn () {
      this.changeVmNameByAct('异步(我是hellow中的数据)').then(() => {
        console.log('我是异步回调函数: ', this.vmName)
      })
    },

    setTime () {
      // 防止多次触发，引起内存泄漏
      this.closeTime(this.timer)

      this.timer = setInterval(() => {
        let lastDate = this.getDateTime()

        // 这里调用 mutations 里的方法(同步)
        this.changeTime(lastDate)
      }, 1000)
    },

    /**
     * @returns {String} 距离下一年剩余的时间
     */
    getDateTime () {
      let date = new Date()
      let nextyear = date.getFullYear() + 1
      let nextsec = new Date(new Date(nextyear, 0, 1) - 1)
      let secs = nextsec - date.getTime() // 获取剩余的毫秒数

      let day = Math.floor((secs) / 1000 / 3600 / 24)
      let hour = Math.floor((secs) % (1000 * 3600 * 24) / (1000 * 3600))
      let min = Math.floor((secs) % (1000 * 3600) / (1000 * 60))
      let sec = Math.floor((secs) % (1000 * 60) / (1000))

      return `${nextyear}年还剩${day}天${hour}时${min}分${sec}秒`
    },

    closeTime () {
      clearInterval(this.timer)
    },

    toGame () {
      this.$router.push('/snake')
    },

    toFlex () {
      this.$router.push('/test')
    },

    toTab () {
      this.$router.push('/table')
    }
  }
}
</script>
