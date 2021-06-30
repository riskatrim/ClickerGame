const menu = document.getElementById('menu');

const gameBoard = document.getElementById('game-board');
const gameDisplay = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
let score = 0;

const scoreBoard = document.getElementById('score-board');
const totalScoreDisplay = document.getElementById('total-score');

const createCircle = () => {
    const object = document.createElement('span');
    object.classList.add('object');
    object.classList.add('circle');
    object.style.top = `${Math.floor(Math.random() * 80) + 1}%`;
    object.style.left = `${Math.floor(Math.random() * 90) + 1}%`;
    object.tabIndex = 1;
    object.onclick = addScore;
    return object;
}
const createSquare = () => {
    const object = document.createElement('span');
    object.classList.add('object');
    object.classList.add('square');
    object.style.top = `${Math.floor(Math.random() * 80) + 1}%`;
    object.style.left = `${Math.floor(Math.random() * 90) + 1}%`;
    object.tabIndex = 1;
    object.onclick = addScore;
    return object;
}
const createTriangle = () => {
    const object = document.createElement('span');
    object.classList.add('object');
    object.classList.add('triangle');
    object.style.top = `${Math.floor(Math.random() * 80) + 1}%`;
    object.style.left = `${Math.floor(Math.random() * 90) + 1}%`;
    object.tabIndex = 1;
    object.onclick = addScore;
    return object;
}
const addScore = (e) => {
    e.target.remove();
    scoreDisplay.innerHTML = ++score;
}
const startGenerateRandomObject = (generateSpeed, removeSpeed) => {
    return setInterval(() => {
        const rand = Math.floor(Math.random() * 3 );
        let object;
        switch (rand) {
            case 0:
                object = createCircle();
                break;
            case 1:
                object = createSquare();
                break;
            default:
                object = createTriangle();
                break;
        }
        gameDisplay.append(object);
        setTimeout(() => {
            object.remove();
        }, removeSpeed);
    }, generateSpeed);
}

const startTimer = (time) => {
    timerDisplay.innerHTML = time;
    return setInterval(() => {
        timerDisplay.innerHTML = --time;
    }, 1000);
}

const startGame = async (level) => {
    score = 0;
    let time;
    let generateSpeed;
    let removeSpeed
    switch (level) {
        case 0:
            time = 60;
            generateSpeed = 400;
            removeSpeed = 3500;
            break;
        case 1:
            time = 40;
            generateSpeed = 300;
            removeSpeed = 1000;
            break;
        default:
            time = 40;
            generateSpeed = 200;
            removeSpeed = 600;
            break;
    }
    showGameBoard();
    const generator = startGenerateRandomObject(generateSpeed, removeSpeed);
    const timer = startTimer(time);
    scoreDisplay.innerHTML = score;
    setTimeout(() => {
        endGame(generator,timer);
    }, time*1000);
}

const endGame = (generator, timer) => {
    totalScoreDisplay.innerHTML = score;
    gameDisplay.innerHTML = '';
    clearInterval(generator);
    clearInterval(timer);
    showScoreBoard();
}

const showMenu = () => {
    gameBoard.style.display = "none";
    scoreBoard.style.display = "none";
    menu.style.display = "flex";
}


const showGameBoard = () => {
    scoreBoard.style.display = "none";
    menu.style.display = "none";
    gameBoard.style.display = "flex";
}


const showScoreBoard = () => {
    gameBoard.style.display = "none";
    menu.style.display = "none";
    scoreBoard.style.display = "block";
}