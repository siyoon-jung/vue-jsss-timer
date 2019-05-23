<template>
    <div class="time">{{minute}}:{{second}}.{{tenMillisecond}}</div>
</template>

<script>
	export default {
    name: 'TimeView',
    props: {
      minute: Number,
      second: Number,
      tenMillisecond: Number,
    }
	};
</script>

<style lang="scss" scoped>
.time {
    font-size: 20vw;
    font-weight: bold;
}
</style>