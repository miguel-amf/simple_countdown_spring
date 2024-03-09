// countdown.js

// Function to format time to mm:ss format
function formatTime(ms) {
    const minutes = Math.floor(ms / (60 * 1000));
    const seconds = Math.floor((ms % (60 * 1000)) / 1000);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimerDisplay(remainingTime) {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(remainingTime);
}

// Function to play the chime sound
function playChime() {
    const chime = document.getElementById('chime');
    chime.play();
}

// Function to start the countdown
function startCountdown(duration) {
    let startTime = Date.now();
    let endTime = startTime + duration;

    // Update timer display initially
    updateTimerDisplay(duration);

    const timerInterval = setInterval(function () {
        let currentTime = Date.now();
        let remainingTime = endTime - currentTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            updateTimerDisplay(0);
            playChime();
            startCountdown(duration);
        } else {
            updateTimerDisplay(remainingTime);
        }
    }, 50);
}
