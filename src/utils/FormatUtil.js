function toTimeFormat(time){
  // "29:00.00"
  // 100ms 단위로 값이 들어오고 있음

  // toFixed : 소수점 2자리까지 0으로 채워주기. 무조건 소수점 2자리까지 표시
  const timeArr = (time / 100).toFixed(2).split('.');
  const hundMilli = timeArr[1];
  const second = timeArr[0] % 60;
  const minute = (timeArr[0] - second) / 60;

  return `${zeroPad(minute)}:${zeroPad(second)}.${zeroPad(hundMilli)}`;
}

function zeroPad(num, maxLen = 2) {
  // padStart : 몇 자리 숫자?
  return num.toString().padStart(maxLen, "0");
}

export {
  toTimeFormat,
  // zeroPad // 밖에서도 쓸 경우 export하면 됨. 
  // 아직 외부에서 사용하지 않으면 export 하지 않는 것이 외부에서 사용 중이 아닌 것으로 판단하기 쉽다
};