// JSON for questions
const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currenQues = 0;
let optionInside = "";
let correctAnswerInside = "";
let indexCorrectOption = "";
let btnCurrent = "";
let btnCorrectAnswer = "";


// fetching all the the divs
const ques = document.getElementById("question");
const optEle = document.getElementById("options");
const scoreEle = document.getElementById("score");
const nextEle = document.getElementById("next");
const submitEle = document.getElementById("submit");

// calling the show question function
showQuestions();
nextEle.addEventListener("click", () => {
  scoreEle.textContent = `Score: ${score} / ${quesJSON.length} `;
  nextQuestion();
});

// function which populate question and options
function showQuestions() {
  // destructing the obj
  const { correctAnswer, options, question } = quesJSON[currenQues];
  ques.textContent = question;
  console.log(question);

  // Shuffling the option
  let shuffleOptions = shuffleArray(options);

  // Populating the options on div

  shuffleOptions.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    optEle.appendChild(btn);

    // to get access for the correct answer button
    if (option === correctAnswer) {
      btnCorrectAnswer = btn;
    }

    btn.addEventListener("click", () => {
      correctAnswerInside = correctAnswer;
      optionInside = option;
      btnCurrent = btn;
    });
    // console.log(score);

    scoreEle.textContent = `Score: ${score} / ${quesJSON.length} `;
  });
}

// submit button
submitEle.addEventListener("click", () => {
  if (optionInside !== "") {
    if (optionInside === correctAnswerInside) {
      score++;
      btnCorrectAnswer.style.backgroundColor = "#4e7b0b";
    } else {
      score = score - 0.25;
      btnCorrectAnswer.style.backgroundColor = "#4e7b0b";
      btnCurrent.style.backgroundColor = "#f52424";
    }
    // nextQuestion();
  } else alert("No option selected");

  scoreEle.textContent = `Score: ${score} / ${quesJSON.length} `;
});


// function for population the next question
function nextQuestion() {
  currenQues++;
  console.log(currenQues);
  optEle.textContent = "";

  if (currenQues >= quesJSON.length) {
    ques.textContent = "Quiz completed";
    optEle.textContent = "";
    nextEle.remove();
    submitEle.remove();
  } else {
    showQuestions();
  }
}

// shuffling the array
function shuffleArray(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
  // console.log(options)
}
