// Random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {

    const guess = Number(document.getElementById("guess").value);

    const message = document.getElementById("message");

    attempts++;

    document.getElementById("attempts").innerHTML =
        "Attempts: " + attempts;

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.innerHTML = "⚠ Enter a number between 1 and 100";
        message.style.color = "red";
        return;
    }

    if (guess < randomNumber) {
        message.innerHTML = "📉 Too Low!";
        message.style.color = "orange";
    }

    else if (guess > randomNumber) {
        message.innerHTML = "📈 Too High!";
        message.style.color = "orange";
    }

    else {
        message.innerHTML = "🎉 Congratulations! You guessed it!";
        message.style.color = "green";
    }

}