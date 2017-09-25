<template>
  <section class="drum-machine-controls">
    <button ng-hide="playing" class="master-control play" @click="playPause()">{{ playing ? 'Stop' : 'Play'}}</button>
    <div class="tempo-controls">
      <p>TEMPO</p>
      <knob :min="20" :max="240"></knob>
      <dial min="20" max="240" for="tempo" class="tempo" target="value">
      </dial>
      <span class="lcd ng-binding">{{ tempo }}</span>
    </div>
    <div class="master-controls">
    <button class="master-control pattern-select on" ng-click="selectedPattern = 0" ng-class="selectedPattern === 0 ? 'on' : 'off'">
    PATTERN A
    </button>
    <button class="master-control pattern-select off" ng-click="selectedPattern = 1" ng-class="selectedPattern === 1 ? 'on' : 'off'">
    PATTERN B
    </button>
    <button class="master-control save" ng-click="save()">
    SAVE
    </button>
    </div>
    <div class="config">
    <p>DRUM KIT SELECT</p>
    <select ng-model="kit" class="kit-select ng-pristine ng-untouched ng-valid" ng-options="opt as opt.name for opt in kits"><option value="0" selected="selected" label="Hip Hop">Hip Hop</option><option value="1" label="Electro">Electro</option><option value="2" label="House">House</option><option value="3" label="Techno">Techno</option><option value="4" label="Acoustic">Acoustic</option></select>
    <button ng-click="record()" ng-show="recState == 'idle'" class="export">EXPORT PATTERN<br>AS WAV</button>
    <button ng-click="stopRecording()" ng-show="recState == 'recording'" class="export recording ng-hide">RECORDING AUDIO<br>
    CLICK TO STOP</button>
    <a href="" ng-show="recState == 'finished'" ng-click="recState = 'idle'" class="export download ng-hide" download="">DOWNLOAD RECORDING</a>
    </div>
  </section>
</template>
<script>
  import Knob from '~/components/vl/knob/Knob.vue'
  export default {
    name: 'drum-controls',
    components: {
      Knob
    },
    data () {
      return {
        recording: 'idle',
        position: 0,
        currentVoice: 0,
        currentPattern: 0,
        length: 16,
        tempo: 128,
        playing: false
      }
    },
    methods: {
      playPause () {
        if (this.playing === false) {
          this.playing = true
        } else {
          this.playing = false
        }
      }
    }
  }
</script>
