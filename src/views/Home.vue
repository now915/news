<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <svg-icon  icon-class="computer" />
    <svg-icon  icon-class="computer" className="big" />
    <svg-icon  icon-class="computer" className="small" />
    <p style="background-color: orange">hellow world</p>
    <div class="asd">
      HelloWorld
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="postcss" scoped>
/* .border_1px:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 1px;
  width: 100%;
  background-color: #000;
  transform-origin: 50% 0%;
}
@media only screen and (-webkit-min-device-pixel-ratio:2){
    .border_1px:before{
        transform: scaleY(0.5);
    }
}
@media only screen and (-webkit-min-device-pixel-ratio:3){
    .border_1px:before{
        transform: scaleY(0.33);
    }
} */
@svg border_1px {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
.asd{
  height: 10vh;
  text-align: left;
  padding: 10vw;
  position: relative;
  border: 1px solid transparent;
  border-image: svg(border_1px param(--color black)) 2 2 stretch;
}
</style>
