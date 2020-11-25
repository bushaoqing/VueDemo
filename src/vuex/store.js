import Vue from 'vue'
import Vuex from 'vuex'
import vmDatas from './modules/vm'
import backupData from './modules/backup'
import alarmData from './modules/alarm'

Vue.use(Vuex)

const store = new Vuex.Store({

  modules: {
    vmDatas,
    backupData,
    alarmData
  }

})

export default store
