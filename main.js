const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswr: "three",
  options: ["two", "three", "four", "five"],
  Questions: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

// destructing the obj
const { correctAnswr, options, Questions } = questionObj;
let score = 0;

// fetching all the the divs
const ques = document.getElementById("question");
const optEle = document.getElementById("options");
const scoreEle = document.getElementById("score");

ques.textContent = Questions;

// Populating the options on div
options.forEach((option) => {
  const btn = document.createElement("button");
  btn.textContent = option;
  optEle.appendChild(btn);
  btn.addEventListener("click", () => {
    if (option === correctAnswr) {
      score++;
    } else score = score - 0.25;
    console.log(score);
    scoreEle.textContent = `Score: ${score} / 5 `;

    ques.textContent = "Quiz completed";
    optEle.textContent = ""
  });
});
