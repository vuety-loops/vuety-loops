export const state = () => ({
  state: {
    playing: false,
    tempo: 128,
    currentVoice: 0,
    currentPattern: 0,
    length: 16
  },
  nodes: []
})

export const actions = {
  addNode ({commit, dispatch}, node) {
    commit('addSample', node)
  }
}

export const mutations = {
  addNode (state, node) {
    console.log(node)
    state.nodes.push({
      id: node.id
    })
  }
}
