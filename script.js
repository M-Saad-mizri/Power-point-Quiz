const correctAnswers = {
  q1: "A", // 1. Transitions command
  q2: "C", // 2. You can insert pictures only
  q3: "D", // 3. Slide Transition
  q4: "D", // 4. Both A & B
  q5: "D", // 5. Title slide
  q6: "B", // 6. Types of custom motion paths
  q7: "B", // 7. Slide transition
  q8: "A", // 8. Add effect
  q9: "B", // 9. Click the document close button
  q10: "D", // 10. Animation Scheme
  q11: "B", // 11. Powerpnt.exe
  q12: "B", // 12. Ctrl + E
  q13: "A", // 13. Press Escape
  q14: "C", // 14. Word Art
  q15: "B", // 15. Ctrl + M
  q16: "C", // 16. MS PowerPoint
  q17: "C", // 17. William Oughtred
  q18: "A", // 18. Place Holder
  q19: "B", // 19. Slide Show Tab
  q20: "A", // 20. Operator
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
