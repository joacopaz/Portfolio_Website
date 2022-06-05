$(document).ready(function () {
    $('.ldBar').data("value", "1")
});
var statusTracker;
var percentage = 0;

function checkStatus() {
    percentage = percentage + 5;
    $('.ldBar').data("value", percentage)
    if (percentage == 100) stop();
}

function startProgress() {
    statusTracker = setInterval(checkStatus, 500);
}

function stop() {
    clearInterval(statusTracker);
}
$(document).ready(startProgress);