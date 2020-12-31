
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Magnesite is a mineral having __type of lustre",
      answers: {
        a: "Earthy",
        b: "Resinous",
        c: "Vitreous",
        d: "Metallic"
      },
      correctAnswer: "c"
    },
    {
        question: "Four set of cleavage is present in",
        answers: {
        a: "Chlorite",
        b: "Fluorite",
        c: "Sphalerite",
        d: "Kayanite"
        },
        correctAnswer: "b"
    },
    {
      question: "Feldspar has a hardness value of __",
      answers: {
        a: "5",
        b: "7",
        c: "8",
        d: "6"
      },
      correctAnswer: "d"
    },
    {
      question: "The diaphaneity of mineral which can transmit light only at edges is",
      answers: {
        a: "Transparent",
        b: "Translucent",
        c: "Transopaque",
        d: "Opaque"
      },
      correctAnswer: "b"
    },
    {
      question: "The definite direction or plane along which a mineral tends to break is",
      answers: {
        a: "Fracture",
        b: "Cleavage",
        c: "Both fracture and cleavage",
        d: "None of the above"
      },
      correctAnswer: "b"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
