const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//Devo vedere se il mio input include la risposta corretta del mio array
// const responseHandler = function (event, correctAnswer, index) {
//   if (event.target.innerText === correctAnswer) {

const timerElem = document.querySelector("#second");
const anim = document.querySelector("#timer");
let counter = 60;
timerElem.innerText = counter;

const timer = function () {
  if (counter === 60) anim.classList.add("animation");
  counter -= 1;
  timerElem.innerText = counter;
  if (counter === 0) {
    counter = 60;
    timerElem.innerText = counter;
    anim.classList.remove("animation");
  }
};

let t = setInterval(timer, 1000);

const cleanQuestion = function () {
  const q = document.querySelector("#questions");
  const op = document.querySelector("#options");
  const timerCont = document.querySelector(".timer-container");
  const quizCont = document.querySelector(".quiz__counter");
  quizCont.innerHTML = "";
  q.innerHTML = "";
  op.innerHTML = "";
  timerCont.style.display = "none";
  clearInterval(t);
};

let scores = 0;

const responseHandler = function (ev, response, index) {
  const result = document.querySelector("#result");
  if (response === ev.target.innerText) {
    scores += 1;
  }
  if (index + 1 < questions.length) {
    counter = 61;
    getQuestion(index + 1);
  }
  if (index === questions.length - 1) {
    cleanQuestion();
    result.innerHTML = `Quiz completato! Hai ottenuto un punteggio pari a <span>${scores}</span>!`;
    result.style = "margin-top: 100px";
  }
};

const getQuestion = function (x) {
  const button = [];
  const q = document.querySelector("#questions");
  q.innerHTML = questions[x].question;
  const op = document.querySelector("#options");
  op.innerHTML = "";
  button.push(
    `<button onclick="responseHandler(event,'${questions[x].correct_answer}',${x})">${questions[x].correct_answer}</button>`
  );
  for (let y = 0; y < questions[x].incorrect_answers.length; y++) {
    button.push(
      `<button onclick="responseHandler(event,'${questions[x].correct_answer}',${x})">${questions[x].incorrect_answers[y]}</button>`
    );
  }
  const shuffledArray = button.sort(() => Math.random() - 0.5);
  for (let y = 0; y < questions[x].incorrect_answers.length + 1; y++) {
    op.innerHTML += shuffledArray[y];
  }
  const quizCont = document.querySelector(".quiz__counter");
  quizCont.innerHTML = `QUESTION ${x + 1} <span>/ ${questions.length}</span>`;
};

if (questions.length > 0) {
  getQuestion(0);
}
