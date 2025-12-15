let twentyBtn = document.getElementById("twentySecondsBtn");
let thirtyBtn = document.getElementById("thirtySecondsBtn");
let fortyBtn = document.getElementById("fortySecondsBtn");
let oneMinBtn = document.getElementById("oneMinuteBtn");
let textEl = document.getElementById("timerText");
let timerId;

function counterBegin(n) {
    textEl.textContent = "";
    let counter = n;
    timerId = setInterval(function() {
        if (counter === 0) {
            textEl.textContent = "Your Moment is complete!";
            clearInterval(timerId);
            return;
        }
        textEl.textContent = counter + " seconds left";
        counter = counter - 1;
    }, 1000);
}
twentyBtn.onclick = function() {
    clearInterval(timerId);
    counterBegin(20);
};
thirtyBtn.onclick = function() {
    clearInterval(timerId);
    counterBegin(30);
};
fortyBtn.onclick = function() {
    clearInterval(timerId);
    counterBegin(40);
};
oneMinBtn.onclick = function() {
    clearInterval(timerId);
    counterBegin(60);
};
