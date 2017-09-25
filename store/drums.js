export const state = () => ({
  state: {
    playing: false,
    tempo: 128,
    currentVoice: 0,
    currentPattern: 0,
    length: 16,
    nextId: 0
  },
  nodes: []
})

export const actions = {
  addNode ({commit, dispatch}, node) {
    commit('addSample', node)
  }
}

export const mutations = {
  addNode (state) {
    state.nodes.push({
      id: state.state.nextId,
      pattern: []
    })
    state.state.nextId++
  },
  removeNode (state, key) {
    for (var i = 0; i < state.nodes.length; i++) {
      if (state.nodes[i].id === key) state.nodes.splice(i, 1)
    }
  }
}
