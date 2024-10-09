const box = document.querySelectorAll(".gameField .box");
let board = Array(9).fill(null);

let gameOn = false;
let XCount = 0;
let OCount = 0;

const selX = document.getElementById("selX");
const selO = document.getElementById("selO");
const head = document.getElementById("head");
const para = document.getElementById("para");
const result = document.getElementById("result");
const startGame = document.getElementById("startGame");
const resetBtn = document.getElementById("resetBtn");
const Xscore = document.getElementById("Xscore");
const Oscore = document.getElementById("Oscore");


resetBtn.style.display = "none";
Xscore.style.display = "none";
Oscore.style.display = "none";

let isXTurn;
let setX;

startGame.addEventListener("click", registerPlayer);

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function registerPlayer() {
 
    const XName = selX.value;
    const OName = selO.value;
 
    if (XName === "" || OName === "") {
        alert("Please enter a valied name.");
    }
    else{
        Xscore.textContent = `${XName}'s Win = ${XCount}`;
        Oscore.textContent = `${OName}'s Win = ${OCount}`;
        result.textContent = `It's ${XName}'s Turn Now.`;
        setContent();
    };
};

function setContent() {
    Xscore.style.display = "block";
    Oscore.style.display = "block";
    head.textContent = "Game On!";
    para.textContent = "Hope you know the rules!";
    selX.style.display = "none";
    selO.style.display = "none";
    startGame.style.display = "none";
    gameOn = true;
}

function checkGame() {
    
    const XName = selX.value;
    const OName = selO.value;
    
    for (let condition of winConditions) {
        const [a,b,c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            
            if (board[a] === "X") {
                XCount++;
                Xscore.textContent = `${XName}'s Win = ${XCount}`;
                result.textContent = `YaY! ${XName} has Won!!`;
            };
            if (board[a] === "O") {
                OCount++;
                Oscore.textContent = `${OName}'s Win = ${OCount}`;
                result.textContent = `YaY! ${OName} has Won!!`;
            };
            gameOn = false;
            resultParas();
            return;
        }
    }
    
    if (!board.includes(null)) {
        result.textContent = "It has been A Tie!"
        gameOn = false;
        resultParas();
        return;
    }
    
    isXTurn = !isXTurn;
    
};

function checkClick(tbox) {
    
    const XName = selX.value;
    const OName = selO.value;
    
    const index = Array.from(box).indexOf(tbox.target);
    
    if (board[index] || gameOn === false) {return;}
    
    board[index] = isXTurn ? "O" : "X";
    tbox.target.textContent = board[index];
    setX = isXTurn ? XName : OName
    result.textContent = `It's ${setX}'s Turn Now.`;
    checkGame();
};

box.forEach(boxes => boxes.addEventListener("click", checkClick));

function resetGame() {
    const XName = selX.value;
    const OName = selO.value;
    
    head.textContent = "Game On!";
    para.textContent = "Hope you know the rules!";
    box.forEach(boxes => boxes.textContent = "");
    setX = isXTurn ? OName : XName;
    result.textContent = `It's ${setX}'s Turn Now.`;
    board = Array(9).fill(null);
    resetBtn.style.display = "none";
    gameOn = true;
}

function resultParas(){
    head.textContent = "Game Has Ended!";
    para.textContent = "Good Game!";
    resetBtn.style.display = "flow-root";
};
