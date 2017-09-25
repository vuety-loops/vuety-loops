<template>
  <div id="drum-machine">
    <h1>Drum Machine</h1>
    <p>This is a drum machine.</p>
    <drum-sample></drum-sample>
    <div id="sample-rack">

    </div>
    <drum-controls></drum-controls>
  </div>
</template>
<script>
  import DrumControls from './DrumControls.vue'
  import DrumSample from './DrumSample.vue'
  export default {
    name: 'drum-machine',
    components: {
      DrumControls,
      DrumSample
    }
  }
</script>
