<template>
    <div>
        <h2>{{msg}}</h2>
        <div>
            alarmName: {{alarmName}}<br>
            <button @click="changeNameByMut('同步(我是snakeFooter中的数据)')">用mutations改变name</button>
            <button @click="changeNameByAct('异步(我是snakeFooter中的数据)')">用actions改变name</button><br><br><br>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Footer',
    
    data () {
        return {
            msg: '我是snakeFooter页面'
        }
    },

    computed: {
        ...mapGetters({
            alarmName: 'alarmData/getVmName'
        })
    },

    methods: {
        ...mapMutations('alarmData', {
            changeNameByMut: 'changeVmName',
            changeNameByAct: 'changeVmName'
        }),

        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>
