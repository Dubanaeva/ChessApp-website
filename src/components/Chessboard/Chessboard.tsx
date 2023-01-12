import Tile from "../Tile/Tile";
import "./Chessboard.css";

const verticalAxis = [1,2,3,4,5,6,7,8];
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

interface Piece{
    image: string
    x: number
    y: number
}
const pieces: Piece[] = [];

for(let p = 0; p < 2; p++){
    const type = p === 0 ? "black": "white";
    const y = p === 0 ? 7: 0;
    pieces.push({image: `assets/images/${type}_ladya.png` , x: 0, y });
    pieces.push({image: `assets/images/${type}_ladya.png` , x: 7, y });
    pieces.push({image: `assets/images/${type}_horse.png` , x: 1, y });
    pieces.push({image: `assets/images/${type}_horse.png` , x: 6, y });
    pieces.push({image: `assets/images/${type}_elephant.png` , x: 2, y });
    pieces.push({image: `assets/images/${type}_elephant.png` , x: 5, y });
    pieces.push({image: `assets/images/${type}_queen.png` , x: 3, y });
    pieces.push({image: `assets/images/${type}_ferz.png` , x: 4, y });

}


for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/black_peshka.png" , x: i, y: 6});
}


for(let i = 0; i < 8; i++){
    pieces.push({image: "assets/images/white_peshka.png" , x: i, y: 1});
}

export default function Chessboard(){
    let board = [];

    for(let j = verticalAxis.length - 1; j >= 0; j--){
        for(let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = undefined;

            pieces.forEach(p => {
                if(p.x === i && p.y === j){
                    image = p.image;
                }
            });

            board.push(
            <Tile image={image} number={number} />
            );
        }
    }
    return <div id="chessboard">{board}</div>;
}