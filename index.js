let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");


function addOneHome () {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function addTwoHome () {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}


function addThreeHome () {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

function addOneGuest () {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function addTwoGuest () {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}


function addThreeGuest () {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function reset () {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
}