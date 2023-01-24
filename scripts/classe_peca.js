class Peca {
    constructor(piece, color) {
        this.piece = piece;
        this.color = color;
        this.currentPiece = 0;
        this.activePiece = this.piece[this.currentPiece];
        this.posX = 3;
        this.posY = -2;
    }

    fill(color) {
        for (let currentRow = 0; currentRow < this.activePiece.length; currentRow++) {
            for(let currentCol = 0; currentCol < this.activePiece.length; currentCol++) {
                if(this.activePiece[currentRow][currentCol]) {
                    drawSquare(this.posY + currentRow, this.posX + currentCol, color);
                }
            }
        }
    }

    draw() {
        this.fill(this.color)
    }

    unDraw() {
        this.fill(defaultColor)
    }

    moveDown() {
        if (!this.collision(0, 1, this.activePiece)) {
            this.unDraw();
            this.posY++;
            this.draw();
            return;
        }
        this.lock();
        piece = randomPiece();
    }

    collision(x, y, futurePiece) {
        for (let currentRow = 0; currentRow < futurePiece.length; currentRow++) {
            for (let currentCol = 0; currentCol < futurePiece.length; currentCol++) {
                if (!futurePiece[currentRow][currentCol]) {
                    continue;
                }
                let newX = this.posX + currentCol + x;
                let newY = this.posY + currentRow + y;
                if (newX < 0 || newX >= COL || newY >= ROW) {
                    return true;
                }
                if (newY < 0) {
                    continue;
                }
                if (board[newY][newX] != defaultColor) {
                    return true;
                }
            }
        }
        return false;
    }

    lock() {
        for (let currentRow = 0; currentRow < this.activePiece.length; currentRow++) {
            for (let currentCol = 0; currentCol < this.activePiece.length; currentCol++) {
                if (!this.activePiece[currentRow][currentCol]) {
                    continue;
                }
                if (this.posY + currentRow < 0) {
                    break;
                }
                board[this.posY + currentRow][this.posX + currentCol] = this.color;
            }
        }
        drawBoard();
    }
}