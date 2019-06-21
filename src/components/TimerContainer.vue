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
        type="main"
      />
      <!-- v-if true/false에 따라 보였다 안보였다   
            v-if="isStop"  
            v-if="!isStop"  
            v-if 다음에 v-else 와야함 서로 연결되어있음
       -->
      <div class="button_area">
        <button id="start" type="button" v-if="isStop" v-on:click="onStartClick">Start</button>
        <button id="stop" type="button" v-else v-on:click="onStopClick">Stop</button>

        <button id="reset" type="button" v-if="isStop" v-on:click="onResetClick">Reset</button>
        <button id="lap" type="button" v-else v-on:click="onLapClick">Lap</button>
      </div>
      <!-- lab list area -->
      <div class="listArea">
        <!-- :laps 의 :는 데이터 바인딩해서 내려주는 것.. 속성이랑 헷갈리지 않기.. -->
        <LapList :laps="laps" />
      </div>
    </div>
</template>

<script>
import TimeView from './TimeView';
import LapList from './LapList';

let timer;

export default {
  name: 'TimerContainer',
  props: {
    // type 선언
    tit: String
  },
  components: {
    TimeView,
    LapList,
  },
  // data: function(){}, 약자 ES6, 
  // data는 fun return으로 써야한다!!!
  data() {
    // 내부에서 관리하는 변수. state같은 녀석..
    return {
      isStop: true,
      time: 0,
      laps: [],
    }
  },
  // timer 돌리기 event
  // 쓰고싶은 함수를 methods에서 선언
  methods: {
    onStartClick(){

      // 사용자가 start를 여러번 눌렀을 경우 방지
      if (timer) 
        return;

      // 처음에 start 버튼 누르면 lap 타임 하나 추가하고 시작
      if (this.time === 0)
        this.addLapTime();
    
      this.isStop = false;

      timer = setInterval(()=>{
        this.time++;

        // 처음에 start 버튼 누르면 lap 타임 하나 추가하고 시작하니까 this.laps[0] 확인 코드 필요 없다
        // if(this.laps[0])
          // vue 여서 가능한.. index를 다시 훑어서 갱신되게끔..
          // index로 접근해도 데이터 갱신이 가능하게 해준다. 리액트의 key와는 다르다
          this.laps[0].time++;

          // console.log(this.laps) // 실제 native array가 아니다..
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
      // reset 하면 lap도 초기화
      this.laps = [];
    },
    onLapClick(){
      this.addLapTime();
    },
    addLapTime(){
      // const lap = {tit: "Lap" + (this.laps.length + 1), time: 0};

      // 최근꺼가 위로 오도록..  
      // 코드량 짧게 하기 위해서 이런 식으로 하기도..
      this.laps = [
        {tit: "Lap" + (this.laps.length + 1), time: 0},
        ...this.laps
      ];
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

        #lap {
          background-color: deepskyblue;
        }
    }
    .listArea {
      position: absolute;
      height: 50vh;
      width: 100%;
      top: 50vh;
      border-top: #ddd 1px solid;
      background-color: #f6f6f6;
      overflow-y: auto;
      overflow-x: hidden;
    }
}
</style>