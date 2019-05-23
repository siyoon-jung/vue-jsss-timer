<template>
    <div class="time">
        {{minuteStr}}:{{secondStr}}.{{tenMillisecondStr}}
    </div>
</template>

<script>
export default {
    name: 'TimeView',
    props: {
      minute: Number,
      second: Number,
      tenMillisecond: Number,
    },
    methods: {
        // 일반적인 모든 함수를 정의할 수 있는 영역
        zeroPad(num){

            // padStart(무조건 2자리 표시, 앞의 빈자리 대체할 텍스트) : IE 지원 안됨!
            // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
            return num.toString().padStart(2, "0");

            // 옛날 방식
            /*
            if(num < 10){
                return "0" + num;
            } else {
                // num.toString() 보다 빈문자열 결합해서 문자열 만드는 방법이 성능이 좋다
                return "" + num; 
            }
            */
        }
    },
    computed: {
        // minuteStr: function(){} 의 ES6 약식
        // this.minute 으로 접근한 props, data의 값이 업데이트되면 함수가 수행되어 재계산됨
        // 이전 값을 캐시하고 있다가 새로 들어온 값이 동일하면 함수를 수행하지 않는다. (랜더링되지 않음) : methods와 computed의 차이..
        minuteStr(){
            return this.zeroPad(this.minute);
        },
        secondStr(){
            return this.zeroPad(this.second);
        },
        tenMillisecondStr(){
            return this.zeroPad(this.tenMillisecond);
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