<!--  -->
<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon-' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>
<style scoped>
.svg-icon,.svg-icon-small,.svg-icon-big{
  vertical-align: middle;
  fill: currentColor;
}
.svg-icon {
  width: 10vw;
  height: 10vw;
}
.svg-icon-small{
  width: 5vw;
  height: 5vw;
}
.svg-icon-big{
  width: 20vw;
  height: 20vw;
}
</style>
