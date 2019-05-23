<template>
  <div id="app">
    <TimerContainer tit="JSSS Timer" />
  </div>
</template>

<script>
import TimerContainer from './components/TimerContainer.vue'

export default {
  name: 'app',
  components: {
    TimerContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
