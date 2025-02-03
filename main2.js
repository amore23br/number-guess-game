// 전부 날리고 다시 해본 결과 코드
let comValue = 0;
let chance = 5;
let inputArr = [];

let inputValue = document.getElementById("user-input");
let playBtn = document.getElementById("play-btn");
let resultArea = document.querySelector("#result-area");
let chanceArea = document.querySelector("#chance-area");
let resetBtn = document.querySelector("#reset-btn");

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

// 랜덤숫자
const randomValue = () => {
  comValue = Math.floor(Math.random() * 100) + 1;
  console.log("정답", comValue);
};

function play() {
  let userValue = inputValue.value;

  if (userValue < 1 || userValue > 100) {
    alert("1~100 사이의 숫자를 입력해주세요");
    return;
  }
  if (inputArr.includes(userValue)) {
    alert("이미 입력한 숫자입니다. 다시 입력해주세요");
    return;
  }

  inputArr.push(userValue);
  console.log("inputArr", inputArr);

  if (userValue < comValue) {
    resultArea.textContent = "UP";
  } else if (userValue > comValue) {
    resultArea.textContent = "DOWN";
  } else {
    resultArea.textContent = "correct";
    playBtn.disabled = true;
  }

  chance--;

  if (chance === 0) {
    chanceArea.textContent = "남은 찬스가 없습니다. 다시도전하세요";
    playBtn.disabled = true;
  } else {
    chanceArea.textContent = `남은찬스 : ${chance}번`;
  }
}

function reset() {
  inputValue.value = "";
  randomValue();

  resultArea.textContent = "결과값";
  chanceArea.textContent = "남은찬스 : 5번";
}

randomValue();

/** 
const play = () => {} 
화살표함수로 사용시 이벤트 발생 요소가 아닌 window를 가리켜서 Cannot access 'play' before initialization 에러 발생 → 이벤트 객체를 받지 않음
해결방법1) addEventListener를 play함수가 선언된 이후에 사용하기
해결방법2) 화살표 함수 대신 function(){} 으로 사용
 */
