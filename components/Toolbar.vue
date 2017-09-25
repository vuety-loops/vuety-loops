<template>
  <nav :class="['navbar',{
    'navbar-inverse':(type == 'inverse'),
    'navbar-default':(type == 'default'),
    'navbar-fixed-top':(placement === 'top'),
    'navbar-fixed-bottom':(placement === 'bottom'),
    'navbar-static-top':(placement === 'static')
  }]">
    <div :class="fluid ? 'container-fluid' : 'container'">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed"  aria-expanded="false" @click.prevent="toggleCollapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <slot name="collapse"></slot>
        <slot name="brand"></slot>
      </div>
      <div :class="['navbar-collapse',{collapse:collapsed}]">
        <ul class="nav navbar-nav">
          <slot></slot>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <slot name="right"></slot>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: 'toolbar',
    data () {
      return {
        id: 'bs-example-navbar-collapse-1',
        collapsed: true,
        styles: {}
      }
    },
    props: {
      type: {
        type: String,
        default: () => 'default'
      },
      placement: {
        type: String,
        default: () => 'top'
      },
      fluid: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toggleCollapse () {
        this.collapsed = !this.collapsed
      }
    },
    mounted () {
      this._navbar = true
    },
    computed: {
      slots () {
        return this._slotContents
      }
    }
  }
</script>
