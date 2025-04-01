const quiz_duration=7200;
let time_remaining=quiz_duration;

function formatTime(seconds){
    const hours=Math.floor(seconds/3600);
    const minutes=Math.floor((seconds%3600)/60);
    const secs=seconds%60;
    return `${hours.toString().padStart(2, '0')}:` +
             `${minutes.toString().padStart(2, '0')}:` +
             `${secs.toString().padStart(2, '0')}`;
}

function updateTimer(){
    const timerElement=document.getElementById('timer');
    timerElement.textContent=formatTime(time_remaining);

    if(time_remaining>0){
        time_remaining--;
    }

    else{
        clearInterval(timerInterval);
        alert('Time is up! Submit your quiz');
    }
}

const timerInterval=setInterval(updateTimer,1000);
updateTimer();

function calculateScore() {
    const form=document.getElementById('quizForm');
    let totalScore=0;

    for(let i=1;i<50;i++){
        const selectedAnswer=form.querySelector(`input[name="q${i}"]:checked`);

        if(selectedAnswer){
            totalScore=totalScore+parseInt(selectedAnswer.value);
        }
    }

    const result=document.getElementById('result');
    result.textContent=`Your total score is: ${totalScore}`;

    if (totalScore>35) {
        const message=document.getElementById('message');
        message.textContent='Good! Keep Maintaining';
    }

    else if(totalScore<35 && totalScore>=30){
        const message=document.getElementById('message');
        message.textContent='Not Bad! Work More';
    }

    else if(totalScore<30){
        const message=document.getElementById('message');
        message.textContent='Work Hard! Increase Your Score';
    }
}