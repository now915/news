<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <svg-icon  icon-class="computer" />
    <svg-icon  icon-class="computer" className="big" />
    <svg-icon  icon-class="computer" className="small" />
    <p style="background-color: orange">hellow world</p>
    <button @click="sortTime()">click</button>
    <div class="asd">
      HelloWorld
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { setTimeout } from 'timers'

export default {
  name: 'home',
  data () {
    return {
      date: []
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    this.date.push({
      num: 1,
      date: new Date()
    })
    setTimeout(function () {
      this.date.push({
        num: 2,
        date: new Date()
      })
    }.bind(this), 2000)
    setTimeout(function () {
      this.date.push({
        num: 3,
        date: new Date()
      })
    }.bind(this), 4000)
    var a = {
      n: 1
    }
    var b = a
    a.x = a = {
      n: 2
    }
    console.log(a)// {n:2}
    console.log(a.x)// undefined
    console.log('------------------------')
    console.log(b)// {n:1,x:{n:2}}
    console.log(b.x)// {n:2}
  },
  methods: {
    sortTime () {
      this.date.sort(this.sortRules)
      console.log(this.date)
    },
    sortRules (a, b) {
      if (a.date && b.date) {
        return a.date - b.date
      } else {
        return 0
      }
    }
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
