<template>
  <div class="drum-sample">
    <h2>Drum Sample</h2>
    <p><button class="btn" @click.prevent="removeNode">Remove</button></p>
    {{ node.id }}
    {{ array }}
    {{ index }}
    <input type="checkbox" v-for="n in length" :value="n" :id="n" name="pattern" v-model="pattern" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'drum-sample',
    data () {
      return {
        pattern: []
      }
    },
    props: {
      node: {
        type: Object,
        default: () => {}
      },
      array: {
        type: Number,
        default: () => 0
      },
      index: {
        type: Number,
        default: () => 0
      }
    },
    computed: {
      ...mapState({
        length: state => state.drums.state.length
      })
    },
    methods: {
      removeNode () {
        this.$store.commit('drums/removeNode', this.$props.node.id)
      }
    }
  }
</script>
