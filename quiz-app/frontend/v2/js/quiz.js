let questions = [
    {
        question: "What is HTML",
        answerA: "Programming Language",
        answerB: "HyperText Markup Language",
        answerC: "OOP Language",
        answerD: "AI Language",
        correctAnswer: "Programming Language",
    },{
        question: "What is CSS",
        answerA: "A language",
        answerB: "A technology",
        answerC: "Cascading Style Sheets",
        answerD: "A terminology in AI",
        correctAnswer: "Programming Language",
    },
];

let quizPane = document.querySelector('.quiz-pane');
let quizItems = document.querySelectorAll('.quiz-item');
// let question = document.querySelector('.question');
// let answer = document.querySelector('.answer');
let btnSubmit = document.querySelector('button');

function renderQuestion(){
    return quizItems[0]
}
console.log(quizItems[0]);



btnSubmit.addEventListener('click', function(event){

    // alert("ok");


    event.preventDefault();

})
