const wall = document.querySelector("#wall");
if (!wall.getContext){
    alert('Your browser doesn\'t support canvas drawing!');
}
const ctx = wall.getContext('2d');

function drawWall(CanvasContext){
    const bh = 20;
    const bw = 50;
    const space = 5;
    CanvasContext.fillStyle = "#F6522F"
}
for(let brickRow = 0; brickRow<4; brickRow++){
    //Draw column
    for(let brickColumn = 0; brickColumn <6; brickColumn++){
        //Draw rows
        CanvasContext.fillRect(brickColumn*(bw + space), brickRow *(bh +space),bw,bh)
    }
}

drawWall(ctx);