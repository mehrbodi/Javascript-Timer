jQuery(document).ready(function ($) {

    function countdownTimer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;
    
        displayTime(then);
    
        // Update the countdown timer every second
        const timer = setInterval(() => {
            const now = Date.now();
            const remainingSeconds = Math.round((then - now) / 1000);
    
            // If the countdown is finished, stop the interval and display a message
            if (remainingSeconds < 0) {
                clearInterval(timer);
            } else {
                displayTime(then);
            }
        }, 1000);
    }
    
    // Function to display the remaining time
    function displayTime(timestamp) {

        const remainingSeconds = Math.round((timestamp - Date.now()) / 1000);
        if (remainingSeconds >= 0) {
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            let displayTime = `${minutes}:${seconds}`;
            $('.meh-count-down').text(displayTime);
        }
    }
    $('.countTimer').click(function(){
        countdownTimer(120);
    });

});