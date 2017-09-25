<template>
  <div
    class="knob"
    :style="{
      'background-image': 'url(' + src + ')'
    }"
    @mousedown="mousedown($event)"
    @mouseup="mouseup()">
    <span
      class="value-tip"
      :style="{ 'opacity': opacity }"
      >
      {{value}}
    </span>
  </div>
</template>
<script>
  export default {
    name: 'knob',
    methods: {
      mousedown (event) {
        this.$el.firstChild.style.opacity = 1
        this.startPos = event.pageY ? event.pageY : event.screenY ? event.screenY : 0
        this.startVal = this.value
        this.boundMousemove = this.mousemove.bind(this)
        this.boundCancel = this.mouseup.bind(this)
        window.addEventListener('mousemove', this.boundMousemove, true)
        window.addEventListener('mouseup', this.boundCancel, true)
        event.preventDefault()
      },
      mouseup () {
        this.$el.firstChild.style.opacity = 0
        window.removeEventListener('mousemove', this.boundMousemove, true)
        window.removeEventListener('mouseup', this.boundCancel, true)
      },
      mousemove (event) {
        let offset = (this.startPos - (event.pageY ? event.pageY : event.screenY ? event.screenY : 0)) || 0
        let value = this.startVal + (event.shiftKey ? ~~(offset / 3) : this.step * offset)
        this.update.bind(this)(value)
        console.log('Moved')
        console.log(offset)
      },
      update (newValue) {
        this.value = newValue < this.min ? this.min : newValue > this.max ? this.max : newValue
        var range = this.max - this.min
        var thisValue = '-' + ~~(this.sprites / range * (range - this.min + this.value) + 1) * this.diameter + 'px'
        if ('backgroundPositionY' in this.$el.firstChild.style) {
          this.$el.style.backgroundPositionY = thisValue
        } else {
          this.$el.style.backgroundPosition = 'center ' + thisValue
        }
        // this.$el.fire('change')
      }
    },
    data () {
      return {
        value: this.$props.params && this.$props.params.value ? this.$props.params.value : 0,
        opacity: 0,
        diameter: 64,
        step: 3,
        sprites: 30,
        src: require('~/components/vl/knob/images/org_amp.png'),
        startPos: null,
        startVal: 0,
        token: '',
        boundMouseMove: null,
        boundCancel: null
      }
    },
    props: {
      params: {
        type: Object,
        default: () => {}
      },
      min: {
        type: [String, Number],
        default: () => 0
      },
      max: {
        type: [String, Number],
        default: () => 100
      }
    },
    computed: {
    },
    mounted () {
      this.$el.style.width = this.diameter + 'px'
      this.$el.style.height = this.diameter + 'px'
      console.log(this)
      // this.token = this.id.replace('data-v-', '')
    }
  }
</script>
<style lang="scss">
  .knob {
    cursor: pointer;
    width: 64px;
    height: 64px;
    background-position-y: -64px;
    position: relative;
    display: inline-block;
    .value-tip {
      opacity: 0;
      border: solid 1px #666;
      background-color: #eee;
      position: absolute;
      top: 0;
      right: 0;
      padding: 1px 4px;
      font-size: 10px;
      font-family: Helvetica;
      transition: opacity 0.3s;
    }
  }
</style>
