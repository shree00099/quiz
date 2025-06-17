const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Mark Language"],
    answer: 0
  },
  {
    question: "What does CSS do?",
    options: ["Adds logic", "Styles content", "Stores data"],
    answer: 1
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript"],
    answer: 2
  }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQ];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQ].answer;
  if (selected === correct) score++;

  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionEl.classList.add("hidden");
  optionsEl.classList.add("hidden");
  nextBtn.classList.add("hidden");
  scoreEl.classList.remove("hidden");
  scoreEl.textContent = `🎉 Your Score: ${score}/${questions.length}`;
}

nextBtn.onclick = loadQuestion;

loadQuestion();
