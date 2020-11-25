const backupData = {
  namespaced: true,

  state: {
    vmData1: {
      name: 'backupName',
      type: 'acloud',
      isOn: true,
      ststus: 'normal'
    },
    isUsed: true
  },

  getters: {
    getName: state => state.vmData1.name
  },

  mutations: {
    closeVm (state, value) {
      state.isOn = false
    },

    toggleUsed (state, value) {
      state.isUsed = !state.isUsed
    }
  },

  actions: {
    closeVm ({commit}, value) {
      commit('closeVm')
    },

    toggleUsed (context, value) {
      context.commit('toggleUsed')
    }
  }
}

export default backupData
