<template>
    <div :class="type">
        {{timeFormat}}
    </div>
</template>

<script>
import {toTimeFormat} from '../utils/FormatUtil';

export default {
    name: 'TimeView',
    props: {
      time: Number,
      type: String,
    },
    computed: {
        timeFormat(){
            return toTimeFormat(this.time);
        },
    }
};
</script>

<style lang="scss" scoped>
    .main { 
        font-size: 20vw;
        font-weight: bold;
    }
    .lap_item {
        float: right;
        margin-right: 0;
    }
</style>