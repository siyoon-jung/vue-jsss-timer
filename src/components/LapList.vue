<template>
  <ul class="comp">
    <LapListItem v-for="lap in laps" :lap="lap" />
  </ul>
</template>

<script>
  import LapListItem from './LapListItem';

  export default {
    // name 은 컴포넌트로 사용할 이름. 파일명과 동일하게 해주는 것이 좋다
    name: 'LapList',
    props: {
      laps: Array,
    },
    components: {
      LapListItem,
    }
  };
</script>

<style scoped>
  .comp {
      border-top: #BBB 1px solid;
      padding: 0;
  }
</style>

