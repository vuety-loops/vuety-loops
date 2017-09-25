<template>
  <div id="drum-machine-page">
    <h1>Drums</h1>
    <button class="start">Start</button>
    <drum-machine></drum-machine>
  </div>
</template>
<script>
  import VlKnob from '~/components/vl/knob/Knob.vue'
  const DrumMachine = () => import('~/components/vl/drums/DrumMachine.vue')
  export default {
    name: 'drums',
    components: {
      DrumMachine,
      VlKnob
    },
    data () {
      return {
        volume_params: {
          label: 'Volume'
        }
      }
    },
    mounted () {
      /* eslint new-parens: "off" */
      /* eslint no-unused-vars: "off" */
      /* eslint no-undef: "off" */
      /* eslint eqeqeq: "off" */
      /* eslint-env browser */
      // let audioCtx = new (window.AudioContext || window.webkitAudioContext)()
      // let oscillator = audioCtx.createOscillator()
      // let gainNode = audioCtx.createGain()
      // oscillator.connect(gainNode)
      // gainNode.connect(audioCtx.destination)
      // oscillator.type = 'sine'
      // oscillator.frequency.value = 2500
      // // oscillator.start()
      // let startOsc = document.querySelector('.start')
      // startOsc.onclick = function () {
      //   if (startOsc.id == '') {
      //     oscillator.start()
      //     startOsc.id = 'activated'
      //     startOsc.innerHTML = 'Start'
      //   } else {
      //     oscillator.stop()
      //     startOsc.id = ''
      //     startOsc.innerHTML = 'Stop'
      //   }
      // }
    }
  }
</script>
<style lang="scss">

</style>
