let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

window.addOneHome = function () {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

window.addTwoHome = function () {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

window.addThreeHome = function () {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

window.addOneGuest = function () {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

window.addTwoGuest = function () {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

window.addThreeGuest = function () {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

window.reset = function () {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}