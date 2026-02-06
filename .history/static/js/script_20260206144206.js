let countdown;

function startTimer() {
    // "Kill Switch" to stop any running timers
    clearInterval(countdown);
    
    const minutes = document.getElementById('minutesInput').value;
    if (!minutes) return alert("Enter minutes!");

    const now = Date.now();
    const then = now + minutes * 60  * 1000;
    displayTimeLeft(minutes * 60);
    
    countdown = setInterval(function () {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            alert("Time's up!");
            return;
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