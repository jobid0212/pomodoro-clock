let countdown;

function startTimer(phase) {
    // "Kill Switch" to stop any running timers
    clearInterval(countdown);

    let durationInput;
    if (phase == 'study') {
        durationInput = 'studyDurationInput';
    } else {
        durationInput = 'breakDurationInput';
    }

    const timeArray = document.getElementById(durationInput).value.split(':');
    console.log(timeArray);
    if (timeArray.length != 2 ) return alert('Enter correct format! (MM:SS)');
    const seconds = Number(timeArray[0]) * 60 + Number(timeArray[1]);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            if (phase == 'study'){
                alert('Start Break!');
                startTimer('break');
                return;
            } else {
                alert('Break Over!');
                return;
            }
            
        }

        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // For ternary operator: If remainderSeconds < 10, append '0', else append ''
    // Then it appends value of remainderSeconds
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('display').textContent = display;
}