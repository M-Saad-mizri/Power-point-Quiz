const correctAnswers = {
  q1: "A",
  q2: "C",
  q3: "D",
  q4: "D",
  q5: "D",
  q6: "B", // 6. Types of custom motion paths
  q7: "B", // 7. Slide transition
  q8: "A", // 8. Add effect
  q9: "B", // 9. Click the document close button
  q10: "D", // 10. Animation Scheme
};

document.getElementById("submit-btn").addEventListener("click", function () {
  const form = document.getElementById("quiz-form");
  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  // Loop through each question to check answers and highlight
  for (let i = 1; i <= totalQuestions; i++) {
    let question = `q${i}`;
    let selectedAnswer = form[question].value;

    // Get all options for the question
    let options = form[question];

    // Loop through options to add or remove correct/wrong classes
    for (let option of options) {
      option.parentElement.classList.remove("correct", "wrong"); // Remove previous classes
      if (option.value === correctAnswers[question]) {
        // Highlight correct option
        option.parentElement.classList.add("correct");
      }
      if (option.checked && option.value !== correctAnswers[question]) {
        // Highlight wrong selected option
        option.parentElement.classList.add("wrong");
      }
    }

    // If the selected answer is correct, increment the score
    if (selectedAnswer === correctAnswers[question]) {
      score++;
    }
  }

  // Display the score after submitting
  document.getElementById(
    "score"
  ).innerText = `Your Score: ${score} / ${totalQuestions}`;
});
