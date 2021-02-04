let indexQues;
let totalQues = myQuestions.length;
let currentQues;
let previousBtn;
let nextBtn;
let submitBtn;

let playAgainBtn = document.getElementById("playAgainBtn");

let questionContent;
let questionBlockClass;
let allAnswers;
let scoreLbl;
let score = 0;
const hideQuestionClass = "display_none";
document.onload = initPage();

//Read the rules before doing the quiz
alert("You have to answer the question one-by-one before moving to the others.\nIf the answer is clear, the score of this answer will be 0\nReady?");

function initPage() {
  previousBtn = document.getElementById("previousBtn");
  nextBtn = document.getElementById("nextBtn");
  submitBtn = document.getElementById("submitBtn");

  // playAgainBtn = document.getElementById("playAgainBtn");

  currentQues = document.querySelector(".currentQues_lbl");
  totalQues_lbl = document.querySelector("#totalQues_lbl");
  questionBlockClass = document.querySelector(".questionBlockClass");
  scoreLbl = document.querySelector("#score");

  indexQues = 1;

  //Init value for DOM
  totalQues_lbl.innerHTML = totalQues;
  questionBlockClass.innerHTML = getAllQuestionContent();

  displayTargetQuestion(indexQues - 1);

  setCurrentQuestion();
  nextBtn.addEventListener("click", clickNextBtn);
  previousBtn.addEventListener("click", clickPreviousBtn);
  submitBtn.addEventListener("click", clickSubmitBtn);
  
  

}

//Calculate score and show score on screen
function clickSubmitBtn(e) {
  e.preventDefault();
  let userAnswersList = [];
  for (var i = 0; i < totalQues; i++) {
    let question = document.querySelector(`input[name="${i}"]:checked`);
    let userAnswers;
    if (question != null) {
      userAnswers = {
        questionId: i,
        answer: question.value,
      };
    } else {
      userAnswers = {
        questionId: i,
        answer: "",
      };
    }
    userAnswersList.push(userAnswers);
  }

  //Calculate score

  for (var j = 0; j < totalQues; j++) {
    if (userAnswersList[j].answer === myQuestions[j].correctAnswer) {
      ++score;
    }
  }
  // console.log(score);
  scoreLbl.innerHTML = `You got ${score}/${totalQues} correct answer(s)`;
  previousBtn.setAttribute("disabled", "disabled");
  submitBtn.setAttribute("disabled", "disabled");
  if(score >= 7){
    alert(`Your score : ${score*100}. Good job!`);
  }else{
    alert(`Your score : ${score*100}. Learn more bro :)`);
  }
  playAgainBtn.removeAttribute("class");
  playAgainBtn.addEventListener("click", clickPlayAgainBtn);
  function clickPlayAgainBtn(e){
    e.preventDefault();
    location.reload();
    // initPage(); 
  }

}
// console.log(score);

//Get question content base on current question index
// function getQuestionContent() {
//   questionObj = myQuestions[indexQues - 1];
//   let questionBlock = "";
//   questionBlock = `<div class="container_1" id="question_${indexQues - 1}">
//             <label for="${indexQues - 1}" class="question">
//               Question<label class="currentQues_lbl"></label>: ${questionObj.question}
//             </label><br>
//             <label><input name="${indexQues - 1}" type="radio" value="a">${
//     questionObj.answers.a
//   }</label><br>
//             <label><input name="${indexQues - 1}" type="radio" value="b">${
//     questionObj.answers.b
//   }</label><br>
//             <label><input name="${indexQues - 1}" type="radio" value="c">${
//     questionObj.answers.c
//   }</label><br>
//             <label><input name="${indexQues - 1}" type="radio" value="d">${
//     questionObj.answers.d
//   }</label><br>
//             </div>`;
//   return questionBlock;
// }

function getAllQuestionContent() {
  let allQuesContent = "";
  for (var i = 0; i < myQuestions.length; i++) {
    // let single_question = `<div class="container_1 ${hideQuestionClass}" id="question_${i}">
    //                                     <label for="${
    //                                       indexQues - 1
    //                                     }" class="question">Question ${
    //   i + 1
    // }: ${myQuestions[i].question}
    //                                     </label><br>
    //                                     <label><input name="${i}" type="radio" value="a">${
    //   myQuestions[i].answers.a
    // }</label><br>
    //                                     <label><input name="${i}" type="radio" value="b">${
    //   myQuestions[i].answers.b
    // }</label><br>
    //                                     <label><input name="${i}" type="radio" value="c">${
    //   myQuestions[i].answers.c
    // }</label><br>
    //                                     <label><input name="${i}" type="radio" value="d">${
    //   myQuestions[i].answers.d
    // }</label><br>
    //                                     </div>`;
    let single_question = `<div class="container_1 ${hideQuestionClass}" id="question_${i}">
                            <!--<div>
                            <label id="score">
                              <label class="currentQues_lbl"></label> out of <label id="totalQues_lbl">${totalQues}</label>
                              <h2>Score - ${score}</h2>
                            </label>
                            </div>-->
                            <label for="${indexQues - 1}" class="question">Question ${i + 1}: ${myQuestions[i].question}
                            </label><br>
                            <div class="answer">
                              <label class="lbl-wrapper">
                                <input name="${i}" type="radio" value="a">
                                <div class="lblA">${myQuestions[i].answers.a}</div>
                              </label>
                              <label class="lbl-wrapper">
                                <input name="${i}" type="radio" value="b">
                                <div class="lblB">${myQuestions[i].answers.b}</div>
                              </label>
                              <label class="lbl-wrapper">
                                <input name="${i}" type="radio" value="c">
                                <div class="lblC">${myQuestions[i].answers.c}</div>
                              </label>
                              <label class="lbl-wrapper">
                                <input name="${i}" type="radio" value="d">
                                <div class="lblD">${myQuestions[i].answers.d}</div>
                                </label>
                            </div>
                          </div>`;
    allQuesContent = allQuesContent.concat(single_question);
  }
  return allQuesContent;
}

function displayTargetQuestion(index) {
  let targetQuestionId = `#question_${index}`;
  let element = document.querySelector(targetQuestionId);
  let arr = element.className.split(" ");
  if (arr.indexOf(hideQuestionClass) != -1) {
    element.classList.remove(hideQuestionClass);
  }
}

function hideQuestion(index) {
  let targetQuestionId = `#question_${index}`;
  let element = document.querySelector(targetQuestionId);
  let arr = element.className.split(" ");
  if (arr.indexOf(hideQuestionClass) == -1) {
    element.className += " " + hideQuestionClass;
  }
}

function clickNextBtn(e) {
  e.preventDefault();

  hideQuestion(indexQues - 1);
  ++indexQues;
  if (indexQues >= 2) {
    previousBtn.removeAttribute("class");
  }
  if (indexQues == totalQues) {
    nextBtn.setAttribute("class", hideQuestionClass);
    submitBtn.removeAttribute("class");
    
  }

  displayTargetQuestion(indexQues - 1);
  setCurrentQuestion();
}

function clickPreviousBtn(e) {
  e.preventDefault();
  hideQuestion(indexQues - 1);
  --indexQues;
  setCurrentQuestion();
  if (indexQues == 1) {
    previousBtn.setAttribute("class", hideQuestionClass);
  }
  if (indexQues < totalQues) {
    submitBtn.setAttribute("class", hideQuestionClass);
    // playAgainBtn.setAttribute("class", hideQuestionClass);
    nextBtn.removeAttribute("class");
  }

  displayTargetQuestion(indexQues - 1);
  setCurrentQuestion();
}

//When click next button or previous button, display corresponding question
function setCurrentQuestion() {
  currentQues = document.querySelectorAll(".currentQues_lbl");
  for (var i = 0; i < currentQues.length; i++) {
    currentQues[i].innerHTML = indexQues;
  }
}



