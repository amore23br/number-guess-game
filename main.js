let comNum = 0;
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-btn");
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []; //입력값 저장(여러개가 들어갈 경우를 위해 배열로 선언)

//버튼 클릭시 이벤트 발생
//> play() 이걸 넘기지 않은 이윤 바로 시작해버리기 때문! 변수로만 넘기기
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
//> input focus 시 초기화 (다른데 안쓰일 경우 익명함수로 사용)
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

//랜덤값 지정 (1<= random < 100)
function pickRandomNum() {
  comNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", comNum);
}

//'Go'버튼 클릭시 이벤트 발생
function play() {
  let userValue = userInput.value;

  //[유효성검사] user의 입력값이 1~100 사이가 아닐 경우 리턴
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1부터 100 사이의 값을 입력해주세요";
    return; //값의 차감없이 바로 리턴
  }
  //[유효성검사] history 배열에 입력한 값이 있을 경우 리턴
  if (history.includes(userValue)) {
    resultArea.textContent = "이미 입력한 값입니다";
    return;
  }

  chance--; //기회 차감
  chanceArea.textContent = `남은 기회 : ${chance}`;
  //입력값에 따른 up&down
  if (userValue < comNum) {
    resultArea.textContent = "Up!";
  } else if (userValue > comNum) {
    resultArea.textContent = "Down!";
  } else {
    resultArea.textContent = "That's right";
    playBtn.disabled = true;
  }

  //history에 입력한 값을 저장
  history.push(userValue);

  //기회가 0이 되면 게임오버 + 버튼 비활성화
  if (chance === 0) {
    gameOver = true;
  }
  if (gameOver) {
    playBtn.disabled = true;
  }
}

//리셋버튼 클릭시 이벤트 발생
function reset() {
  //input clear & random number reset
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "결과값을 입력해주세요";
}

pickRandomNum();