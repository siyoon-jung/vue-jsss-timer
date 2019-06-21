<template>
    <div class="comp">
      <h1>{{tit}}</h1>
      <!-- v-bind는 : 으로 생략 가능
      
      v-bind:minute="minute"
      :minute="minute"

      :minute 는 TimeView의 props
      ="minute" 은 data()의 minute
       -->
      <TimeView        
        :time="time"
      />
      <!-- v-if true/false에 따라 보였다 안보였다   
            v-if="isStop"  
            v-if="!isStop"  
            v-if 다음에 v-else 와야함 서로 연결되어있음
       -->
      <div class="button_area">
        <button id="start" type="button" v-if="isStop" v-on:click="onStartClick">Start</button>
        <button id="stop" type="button" v-else v-on:click="onStopClick">Stop</button>
        <button type="button" v-on:click="onResetClick">Reset</button>
      </div>
    </div>
</template>

<script>
import TimeView from './TimeView';

let timer;

export default {
  name: 'TimerContainer',
  props: {
    // type 선언
    tit: String
  },
  components: {
    TimeView
  },
  // data: function(){}, 약자 ES6, 
  // data는 fun return으로 써야한다!!!
  data() {
    // 내부에서 관리하는 변수. state같은 녀석..
    return {
      isStop: true,
      time: 0,
    }
  },
  // timer 돌리기 event
  // 쓰고싶은 함수를 methods에서 선언
  methods: {
    onStartClick(){

      // 사용자가 start를 여러번 눌렀을 경우 방지
      if (timer) 
        return;

      this.isStop = false;

      timer = setInterval(()=>{
        this.time++;
      }, 10)
    },
    onStopClick(){
      this.isStop = true;
      clearInterval(timer);
      
      // 사용자가 start를 여러번 눌렀을 경우 방지
      timer = null;
    },
    onResetClick(){
      this.time = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
// lang="scss" 써야 scss 사용 가능
// yarn add sass-loader node-sass --dev
.comp {
    margin: 0px;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;

    h1 {
        font-size: 8vw;
    }

    .button_area {
        margin-top: 10vw;

        button {
            margin-left: 7vw;
            width: 20vw;
            height: 17vw;
            font-size: 4vw;
            background-color: #999999;
            border-radius: 10vw;
            border: 0;
            color: #fff;
            font-weight: bold;
        }

        button:nth-child(1) {
            margin: 0;
        }

        #start {
            background-color: lightgreen;
        }

        #stop {
            background-color: indianred;
        }
    }
}
</style>