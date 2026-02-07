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

/**
 * Takes a parameter of seconds, converts them into a string of minutes and seconds, then
 * sets text of the 'display' element as that string (in MM:SS format).
 * @param {number} seconds The amount of seconds to display.
 */
function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // For ternary operator: If remainderSeconds < 10, append '0', else append ''
    // Then it appends value of remainderSeconds
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.getElementById('display').textContent = display;
}

/**
 * Turns an array of strings into a total of seconds. The first index of the array is converted into minutes, 
 * the second index is converted into seconds.
 * @param {Array<string>} durationArray - An array of strings to be converted into minutes and seconds.
 * @returns an amount of seconds
 */
function convertToSeconds(durationArray) {
    return Number(durationArray[0]) * 60 + Number(durationArray[1]);
}

/**
 * Function to make sure the inputed values are valid. Throws errors if not
 */
function checkInputs() {
    const durationArrays =[document.getElementById('studyDurationInput').value.split(':'), 
                           document.getElementById('breakDurationInput').value.split(':')];
    for (const arr of durationArrays) {

        // throws error if length of array is not 2
        if (arr.length != 2){
            alert('Enter correct format! (MM:SS)');
            throw new Error("Input does not match format.");
        } 

        // throws error if letters were inputed
        if (Number.isNaN(+arr[0]) || Number.isNaN(+arr[1])) {
            alert('Enter numbers! (MM:SS)');
            throw new Error("Input should be numbers");
        }
        
        // throws error if negatives were inputed
        if (parseInt(arr[0]) < 0 || parseInt(arr[1]) < 1) {
            alert('Enter positive numbers! (MM:SS)');
            throw new Error("Input should be positive.");
        }
    }
}