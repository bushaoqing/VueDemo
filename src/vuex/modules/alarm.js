const alarmData = {
  namespaced: true,

  state: {
    vmData: {
      name: 'alarmVm2',
      type: 'acloud',
      isOn: true,
      ststus: 'normal'
    },
    isUsed: true
  },

  getters: {
    getType: state => state.vmData.type,

    getVmName: state => state.vmData.name
  },

  mutations: {
    closeVm (state) {
      state.isOn = false
    },

    toggleUsed (state) {
      state.isUsed = !state.isUsed
    },

    changeVmName (state, value) {
      state.vmData.name = value
    }
  },

  actions: {
    closeVm ({commit}) {
      commit('closeVm')
    },

    toggleUsed (context) {
      context.commit('toggleUsed')
    },

    changeVmName ({commit}, value) {
      commit('changeVmName', value)
    }
  }
}

export default alarmData
