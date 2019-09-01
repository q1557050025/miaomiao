<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import betterScroll from 'better-scroll';

export default {
  name: "Scroll",
  props: {
    handleToScroll: {
      type: Function,
      default: function() {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function() {}
    }
  },
  mounted() {
    var scroll = new betterScroll( this.$refs.wrapper, {
      tap: true,
      probeType: 1,
    })

    this.scroll = scroll

    scroll.on("scroll", (pos) => {
      this.handleToScroll(pos)
    })

    scroll.on("touchEnd", (pos) => {
      this.handleToTouchEnd(pos)
    })
  },
  methods: {
    toScrollTop(y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>

<style>
  .wrapper { height: 100%; }
</style>