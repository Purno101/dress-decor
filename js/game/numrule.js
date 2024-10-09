const guessField = document.getElementById('guessField');
    const label = document.querySelector(".game-field label");
    const guessSubmit = document.getElementById("guessSubmit");
    const guesses = document.getElementById("guesses");
    const lowOrHi = document.getElementById("lowOrHi");
    const endMsg = document.getElementById("endMsg");

    function filterNonNumeric(e) {
        const value = e.target.value;
        e.target.value = value.replace(/[^0-9]/g, '');
    }
    guessField.addEventListener('input', filterNonNumeric);


    let randomNumber = Math.floor(Math.random()*100)+1;
    let guessCount = 1;

    guessSubmit.addEventListener("click", checkGuess);


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });

    function checkGuess() {
        
        const userGuess = Number(guessField.value);

        if (userGuess > 100) {
            lowOrHi.textContent = "Please guess a number less than or equal to 100";
            lowOrHi.style.color = "red";
            return;
        }

        else if (userGuess < 1) {
            lowOrHi.textContent = "Please guess a number greater than or equal to 1";
            lowOrHi.style.color = "red";
            return;
        }

        if (guessCount === 1) {
            guesses.textContent = "Previuos Guess(es): ";
        }
        guesses.textContent = `${guesses.textContent} ${userGuess}`;

        if (userGuess === randomNumber) {
            lowOrHi.textContent = `Congrats! The Number Was ${randomNumber}`;
            lowOrHi.style.color = "#fff";
            lowOrHi.style.background = "var(--border-color)";
            lowOrHi.style.padding = "15px";
            endMsg.textContent = "YAY! Victory!!"
            endMsg.style.color = "var(--border-color)"
            setGameOver();
        }

        else if (guessCount === 7) {
            lowOrHi.textContent = `Wrong! The Number Was ${randomNumber}`;
            lowOrHi.style.color = "#fff";
            lowOrHi.style.background = "red";
            lowOrHi.style.padding = "15px";
            endMsg.textContent = "Ahh! Game Over!!"
            endMsg.style.color = "red"
            setGameOver();
            return;
        }

        else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Your Guess is too High!";
            lowOrHi.style.color = "blue";
        } 
        else if (userGuess < randomNumber) {
            lowOrHi.textContent = "Your Guess is too Low!";
            lowOrHi.style.color = "hotpink";
        }

        guessCount++;
        guessField.value = "";
        guessField.focus();
    }

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;

        const resetBtn = document.getElementById("resetBtn");
        resetBtn.style.display = "inline-block";
        resetBtn.addEventListener("click", resetGame);
    }

    function resetGame() {
        guessCount = 1;

        const result = document.querySelectorAll(".result h3");

        for (const head of result) {
            head.textContent = "";
        }
        lowOrHi.style.background = "none";
        const resetBtn = document.getElementById("resetBtn");
        resetBtn.style.display = "none";

        guessField.disabled = false;
        guessSubmit.disabled = false;
        randomNumber = Math.floor(Math.random()*100)+1;
        guessField.value = "";
        guessField.focus();
    }
