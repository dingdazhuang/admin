<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
  export default {
      name: 'icon-svg',
      props: {
          iconClass: {
              required: true,
              type: String
          }
      },
      computed: {
          iconName: `#${this.iconClass}`
      }
  }
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  font-size: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>