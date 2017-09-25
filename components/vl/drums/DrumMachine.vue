<template>
  <div id="drum-machine">
    <h1>Drum Machine</h1>
    <p>This is a drum machine.</p>
    <div id="sample-rack">
    <button class="btn" @click.prevent="addDrum">Add Sample</button>
    <drum-sample v-if="nodes" v-for="(node, index) in nodes" :key="index"></drum-sample>

    </div>
    <drum-controls></drum-controls>
  </div>
</template>
<script>
  /* eslint no-unused-vars: "off" */
  import DrumControls from './DrumControls.vue'
  import DrumSample from './DrumSample.vue'
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'drum-machine',
    data () {
      return {
        drums: []
      }
    },
    components: {
      DrumControls,
      DrumSample
    },
    computed: {
      ...mapState({
        nodes: state => state.drums.nodes
      })
    },
    methods: {
      addDrum () {
        if (this.nodes.length > 0) {
          this.$store.commit('drums/addNode', {
            id: this.nodes.length
          })
        } else {
          this.$store.commit('drums/addNode', {
            id: 0
          })
        }
      }
    }
  }
</script>
