<template>
  <div class="drum-sample">
    <h2>Drum Sample</h2>
    <p><button class="btn" @click.prevent="removeNode">Remove</button></p>
    {{ node.id }}
    {{ array }}
    {{ index }}
  </div>
</template>
<script>
  export default {
    name: 'drum-sample',
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
    methods: {
      removeNode () {
        this.$store.commit('drums/removeNode', this.$props.node.id)
      }
    }
  }
</script>
