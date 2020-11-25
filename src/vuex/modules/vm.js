const vmDatas = {
  namespaced: true,

  state: {
    time: '我是vmData中的初始值',
    vmData: {
      name: 'vmName',
      type: 'acloud',
      isOn: true,
      ststus: 'normal'
    },
    isUsed: true
  },

  getters: {
    getTimer: state => state.time,

    getVmName: state => state.vmData.name
  },

  mutations: {
    changeVmName (state, value) {
      state.vmData.name = value
    },

    changeTime (state, value) {
      state.time = value
    }
  },

  actions: {
    // 写法一：
    // changeVmName ({commit}, data) {
    //   commit('changeVmName', data)
    // }
    
    // 写法二：下面那个return不要忘了
    changeVmName ({commit}, value) {
      return new Promise(resolve => {
        commit('changeVmName', value)
        resolve()
      })
    }
  }
}

export default vmDatas
