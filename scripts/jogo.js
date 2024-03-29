const cvs = document.getElementById("jogo");
const ctx = cvs.getContext("2d");
const scoreElement = document.getElementById("pontos");
const speedElement = document.getElementById("velocidade");
const ROW = 20;
const COL = 10;
const SQR = 30;
const defaultColor = "#111111";
const defaultBorder = "rgba(255, 255, 255, 0.1)";

let speed = 500;
let dropStart = Date.now();
let score = 0;
let board = [];

for (let currentRow = 0; currentRow < ROW; currentRow++) {
    board[currentRow] = [];
    for(let currentCol = 0; currentCol < COL; currentCol++) {
        board[currentRow][currentCol] = defaultColor;
    }
};

drawBoard();

const PIECES = [
    [I, "cyan"],
    [J, "orange"],
    [L, "purple"],
    [O, "blue"],
    [S, "green"],
    [T, "yellow"],
    [Z, "red"]
];

let piece = randomPiece();

drop();