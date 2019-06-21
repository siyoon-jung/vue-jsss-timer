<template>
  <li class="LapListItem">
    <span class="lap_title">{{this.lap.tit}}</span>
    <!-- <span>{{this.lap.time}}</span> -->
    <!-- 시간은 TimeView 컴포넌트 재활용해서 노출시키기 -->
    <TimeView :time="this.lap.time" type="lap_item" />
  </li>
</template>

<script>
  import TimeView from './TimeView';

  export default {
    name: 'LapListItem',
    components: {
      TimeView,
    },
    props: {
      lap: Object,
    }
  };
</script>

<style scoped>
  .LapListItem {
        position: relative;
        border-bottom: #DDD 1px solid;
        list-style: none;
        height: 8vw;
        padding: 2vw;
        font-size: 6vw;
    }

    .lap_title {
        float: left;
    }
</style>

