
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
      question: "Q1. Which class or interface defines the wait(), notify(),and notifyAll() methods?",
      answers: {
        a: "Object",
        b: "Thread",
        c: "Runnable",
        d: "Class"
      },
      correctAnswer: "a"
    },

    {
      question: "Q2. Which of the following line of code is suitable to start a thread ?",
      answers: {
        a: " Thread t = new Thread(X);",
        b: "Thread t = new Thread(X); t.start();",
        c: " X run = new X(); Thread t = new Thread(run); t.start();",
        d: " Thread t = new Thread(); x.run();"
      },
      correctAnswer: "c"
    },

    {
      question: "Q3. What is maximum thread priority in Java",
      answers: {
        a: "10",
        b: "12",
        c: "5",      
        d: "8"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Which method is used to make main thread to wait for all child threads",
      answers: {
        a: " Join ()",
        b: " Sleep ()",
        c: " Wait ()",        
        d: " Stop ()"
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q5. How many threads can a process contain?",
      
      answers: {
        a: "1",
        b: "2",
        c: "Multiple",
        d: "None"
      },
      correctAnswer: "c"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
