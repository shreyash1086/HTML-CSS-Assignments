//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

let res = 0;

document.getElementById('cards').style.display = 'none';

function quiz(quizData) {
    document.getElementById('question').textContent = quizData['question'];
    document.getElementById("first").textContent = quizData['a'];
    // document.getElementById("a").setAttribute("value", "a");
    document.getElementById("second").textContent = quizData["b"];
    // document.getElementById("b").setAttribute("value", "b");
    document.getElementById("third").textContent = quizData["c"];
    // document.getElementById("c").setAttribute("value", "c");
    document.getElementById("fourth").textContent = quizData["d"];
    // document.getElementById("d").setAttribute("value", "d");
}

let i;

document.getElementById("start").addEventListener('click', start);
document.getElementById("submit").addEventListener("click", () => onSubmit(i));

function onSubmit(n) {
    const selected = document.querySelector('input[name="opt"]:checked');
    if (!selected) {
        alert('please select a option before submitting');
    } else {
        if (selected.value == quizData[i]["correct"]) {
          res++;
        }
    }
    console.log(res);
    i++;
    quiz(quizData[i]);
}

function start(){
    document.getElementById("cards").style.display = "block";
    document.getElementById("start").style.display = "none";
    i = 0;
    quiz(quizData[i]);
}

// start()

