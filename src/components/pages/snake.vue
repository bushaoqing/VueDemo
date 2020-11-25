<template>
    <div>
        <h2>我是snake页面</h2>
        <button @click="goBack">Go Home</button><br><br>
        <div>
            alarmName: {{alarmName}}<br>
            <button @click="changeNameByMut('同步(我是snake中的数据)')">用mutations改变name</button>
            <button @click="changeNameByAct('异步(我是snake中的数据)')">用actions改变name</button><br><br>
        </div>
        <div>
            <button @click="goSnakeFooter">使用push显示子页1</button>
            <router-link to="/snake/pageTwo">
                <button>显示footer页面2</button>
            </router-link>
        </div><br>
        <div style="border: 1px red solid; padding: 10px">
            <router-view></router-view>
        </div><br>
        <div>
            <router-link to="/cat">
                <button>去猫页面看看</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    name: 'SnakeFooter',

    data () {
        return {
            msg: '温馨提示：游戏结束！！'
        }
    },

    mounted () {
        this.goSnakeFooter()
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
            this.$router.push('/')
        },

        goSnakeFooter () {
            this.$router.push('/snake/footer')
        }
    }
}
</script>
