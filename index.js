const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const correctAns = num1 * num2;

const questionEl = document.querySelector(".question");
const correctAnsEl = document.querySelector("#correctAnsEl");
const formEl = document.querySelector("#form");
const scoreEl = document.querySelector("#score");
const userAnsEl = document.querySelector("#usersInputText");

let score = +localStorage.getItem("score");

if (!score) {
  score = 0;
}

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

formEl.addEventListener("submit", (e) => {
  e.preventDefault;
  const input = +userAnsEl.value;

  if (input === correctAns) {
    score++;
    updateLocalStorage();

    correctAnsEl.classList.remove("invisible");
    correctAnsEl.innerText = `Correct \n Good job`;

    alert(`Correct \n Good job`);
  } else {
    score--;
    updateLocalStorage();

    correctAnsEl.classList.remove("invisible");

    correctAnsEl.innerText = `Answer is ${correctAns}`;
    alert(`Answer is ${correctAns}`);
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
