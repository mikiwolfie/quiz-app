const quizData = [{
    question: 'How old is Mikhail?',
    a: '10',
    b: '17',
    c: '12',
    d: '60',
    correct: 'c'
}, {
    question: 'What is the biggest animal in the world?',
    a: 'Elephant',
    b: 'The blue whale',
    c: 'Giraffe',
    d: 'Dog',
    correct: 'b'
}, {
    question: 'How long does it take to travel the moon?',
    a: '1 Day',
    b: '1 Month',
    c: '3 Week',
    d: '3 Days',
    correct: 'd'
}, {
    question: 'What planet in the solar system has the most moons?',
    a: 'Jupiter',
    b: 'Mercury',
    c: 'Saturn',
    d: 'Venus',
    correct: 'a'
}, {
    question: 'Computer Keyboard is an example of?',
    a: 'input and output both',
    b: 'output device',
    c: 'input device',
    d: 'None of the above',
    correct: 'c'
}]

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You answered correctly at ${score}/${quizData.length} 
            questions.</h2> 
            
            <button onclick="location.reload()"
             >Reload</button>`;
        }
    }
});