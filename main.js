const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

let board = new Board();

function play() {
    board.reset()
    let piece = new Piece(ctx)
    piece.draw()

    board.piece = piece
}

const moves = {
    [KEY.LEFT]:  p => ({ ...p, x: p.x - 1 }),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1 }),
    [KEY.DOWN]:    p => ({ ...p, y: p.y + 1 }),
    [KEY.SPACE]: p => ({ ...p, y: p.y + 1 }),
    [KEY.UP]: p => board.rotate(p)
  };

document.addEventListener('keydown', event => {
    if(moves[event.keyCode]) {
        event.preventDefault()

        let p = moves[event.keyCode](board.piece);

        if (event.keyCode === KEY.SPACE) {
            // Hard drop
            while (board.valid(p)) {
              board.piece.move(p);   
              p = moves[KEY.DOWN](board.piece);
            }
          }
          else if (board.valid(p)) {
            board.piece.move(p);
          }
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        board.piece.draw()
        
    }
})
