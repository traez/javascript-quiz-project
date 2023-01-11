/*
https://jsbeginners.com/javascript-quiz-project/
https://www.youtube.com/watch?v=2Bpiluefkh8
https://www.kindsonthegenius.com/javascript/quiz-app-in-javascript-step-by-step-with-all-codes/
*/

       /*
elements selected
*/
const ul = document.getElementById('ul')
const nextButton = document.getElementById('btnNext');
const quizbox = document.getElementById('questionBox')
const opt1 = document.getElementById('opt1')
const opt2 = document.getElementById('opt2')
const opt3 = document.getElementById('opt3')
const opt4 = document.getElementById('opt4')

       /*
all functions included in single object. first property populates question array. 
next property sets index to 0
*/
const app={
        questions:[
            {
                q: "The first Men's FIFA WorldCup Nigeria qualified for was?",
                options: ['1998','1994', '2002', '2006'],
                answer: '2'
            },
            {
                q: "Which Nigerian Head of State did not die in power?",
                options: ['Tafawa Balewa', 'Abacha', 'Shagari', 'Yaradua'],
                answer: '3'
            },
          {
                q: "Who was the other member of Nigeria R&B group Plantashun Boiz aside 2face Idibia and Blackface?",
                options: ['Faze', 'Sound Sultan', 'Tony Tetuila', 'Eddy Montana'],
                answer: '1'
            },
            {
                q: "Who won the premier edition of Big Brother Nigeria in 2006?",
                options: ['Ebuka Obi-Uchendu', 'Gideon Okeke', 'Michael Efe Ejeba', 'Katung Aduwak'],
                answer: '4'
            },
          {
                q: "Which of the following Nigerians did not feign ill health when charged to court?",
                options: ['Ayodele Fayose', 'Dino Melaye', 'Olisa Metuh', 'Peter Obi'],
                answer: '4'
            },
            {
                q: "Which political party has Rabiu Kwankwaso as its presidential candidate in 2023?",
                options: ['NNPP', 'AAC', 'PRP', 'SDP'],
                answer: '1'
            },
          {
                q: "Edo no be lagos, was a slogan made famous under which Edo State Governor?",
                options: ['Adams Oshiomhole', 'Ifeanyi Okowa', 'Godwin Obaseki', 'Lucky Igbinedion'],
                answer: '3'
            },
            {
                q: "A popular book written by Nigerian novelist Chinua Achebe is?",
                options: ['The Concubine', 'Things Fall Apart', 'The Gods Are Not To Blame', 'Half of a Yellow Sun'],
                answer: '2'
            }       
        ],
        index:0,
        /*
load happens at start. populates questions this being app object, index being 0 as stated in property. If at end of questions, make everything disappear and display quiz completed
*/
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";

                let button = document.createElement("button");
                button.innerHTML = "Try again";
                button.classList.add("try-again");
                button.onclick = function() {
                    location.reload();
                };
                quizbox.appendChild(button);


                ul.style.display="none";
                nextButton.style.display="none";
            }   
        },
              /*
when next button clicked. index increases and next question populated.
function runs when button clicked
*/
        next: function(){
            this.index++;
            this.load();
        },
                      /*
check function to run for particular this button clicked.
id split so question number tied to variable id.
if id === correct answer object for question, score variable increased, correct class added for css effect, total game score function also called to increase total count. else wrong class name added to show red css
*/
check: function(ele){
    const id=ele.id.split('');
    if(id[id.length-1]==this.questions[this.index].answer){
        this.score++;
        ele.className="correct";
        this.scoreCard();
    }
    else{
        ele.className="wrong";
        this.scoreCard();
    }
},
                       /*
prevent function to run when any option button clicked.
when button clicked all buttons will become inactive ...unable to be clicked again. no double voting
*/       
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
                               /*
when we click next and go to next question, all buttons can now work again. wrong and correct option removed, so color reverts to default
*/  
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
                      /*
score variable to check display
*/
score:0,
scoreCard:function(){
    scoreCard.innerHTML=this.score + "/" + Number(this.index + 1) ;
}
}
              /*
on window load app load function should run
*/
window.load=app.load();

              /*
when any button option clicked, check and preventclick function should run
*/
function button(ele){
    app.check(ele);
    app.preventClick();
}

              /*
when next button clicked, next and allowclick function should run
*/
function next(){
    app.scoreCard();
    app.next();
    app.allowClick();
}