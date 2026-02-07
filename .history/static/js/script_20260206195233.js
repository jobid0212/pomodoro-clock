let countdown;


function startTimer(phase) {
    // "Kill Switch" to stop any running timers
    clearInterval(countdown);

    try {
        checkInputs();
    } catch (err) {
        return;
    }
    
    let durationInput;
    if (phase == 'study') {
        durationInput = 'studyDurationInput';
    } else {
        durationInput = 'breakDurationInput';
    }
    const timeArray = document.getElementById(durationInput).value.split(':');
    
    const seconds = convertToSeconds(timeArray);

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

function convertToSeconds(durationArray) {
    return Number(durationArray[0]) * 60 + Number(durationArray[1]);
}

function checkInputs() {
    const durationArrays =[document.getElementById('studyDurationInput').value.split(':'), 
                           document.getElementById('breakDurationInput').value.split(':')];
    for (const arr of durationArrays) {

        if (arr.length != 2){
            alert('Enter correct format! (MM:SS)');
            throw new Error("Input does not match format.")
        } 

        if (parseInt(arr[0]) == Nan || parseInt(arr[1]) == NaN) {
            alert('Enter numbers! (MM:SS)');
            throw new Error("Input should be numbers")
        }
        
        if (parseInt(arr[0]) < 0 || parseInt(arr[1]) < 1) {
            alert('Enter positive numbers! (MM:SS)');
            throw new Error("Input should be positive.")
        }
    }
}