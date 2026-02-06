let countdown;

function startTimer() {

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // For ternary operator: If remainderSeconds < 10, append '0', else append ''
    // Then it appends value of remainderSeconds
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}