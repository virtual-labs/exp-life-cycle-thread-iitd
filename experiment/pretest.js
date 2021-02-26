
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
      question: "Q1. In java a thread can be created by…………..",
      answers: {
        a: "Extending the thread class.",
        b: "Implementing Runnable interface.",
        c: "Both of the above",
        d: "None of these"
      },
      correctAnswer: "c"
    },

    {
      question: "Q2. When a class extends the Thread class, it should override……….method of Thread class to start that thread.",
      answers: {
        a: " start()",
        b: "run()"
        c: "init()"
        d: "go()"
      },
      correctAnswer: "b"
    },

    {
      question: "Q3.  Which two of the following methods are defined in class Thread?",
      answers: {
        a: " start()",
        b: "wait()",
        c: "notify()",
        d: "run()"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q4. Which will contain the body of the thread?",
      answers: {
        a: " start()",
        b: "run()",
        c: "stop()",
        d: " main()"
      },
      correctAnswer: "b"
    },
	
	{
      question: "Q5. Which of the following will not directly cause a thread to stop?",
      answers: {
        a: "notify()",
        b: " wait()"
        c: " InputStream access"
        d: " sleep()"
      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
