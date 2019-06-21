<template>
    <div class="time">
        {{timeFormat}}
    </div>
</template>

<script>
export default {
    name: 'TimeView',
    props: {
      time: Number,
    },
    computed: {
        timeFormat(){
            return this.time;
        },
    }
};
</script>

<style lang="scss" scoped>
.time {
    font-size: 20vw;
    font-weight: bold;
}
</style>