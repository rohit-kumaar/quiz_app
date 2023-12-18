// querySelector function
function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

const startBtn = qs("#start-btn");
const nextBtn = qs("#next-btn");
const questionContainerElement = qs("#question-container");
const questionElement = qs("#question");
const answerButtonsElement = qs("#answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", function (e) {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);

  nextBtn.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "Restart";
    startBtn.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
      { text: "2", correct: false },
      { text: "44", correct: false },
    ],
  },
  {
    question: "What is 3 x 5?",
    answers: [
      { text: "8", correct: false },
      { text: "15", correct: true },
      { text: "2", correct: false },
      { text: "35", correct: false },
    ],
  },
  {
    question: "What is 10 - 7?",
    answers: [
      { text: "3", correct: true },
      { text: "7", correct: false },
      { text: "10", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "What is 6 ÷ 2?",
    answers: [
      { text: "2", correct: false },
      { text: "12", correct: false },
      { text: "3", correct: true },
      { text: "0", correct: false },
    ],
  },
  {
    question: "What is 8 squared?",
    answers: [
      { text: "64", correct: true },
      { text: "4", correct: false },
      { text: "16", correct: false },
      { text: "128", correct: false },
    ],
  },
  {
    question: "What is 20 + 30?",
    answers: [
      { text: "50", correct: true },
      { text: "80", correct: false },
      { text: "100", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    question: "What is 9 x 9?",
    answers: [
      { text: "81", correct: true },
      { text: "18", correct: false },
      { text: "99", correct: false },
      { text: "72", correct: false },
    ],
  },
  {
    question: "What is 15 - 6?",
    answers: [
      { text: "9", correct: true },
      { text: "21", correct: false },
      { text: "11", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "What is 14 ÷ 2?",
    answers: [
      { text: "2", correct: false },
      { text: "7", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "What is 4 + 6?",
    answers: [
      { text: "10", correct: true },
      { text: "8", correct: false },
      { text: "14", correct: false },
      { text: "12", correct: false },
    ],
  },
];
