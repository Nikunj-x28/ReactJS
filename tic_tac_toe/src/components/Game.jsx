import { useState } from "react";
import Board from "./Board";
export default function Game (){
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove] = useState(0);
    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0,currentMove+1),nextSquares]
        setHistory(nextHistory);
        setCurrentMove(currentMove+1)
    }
    function jumpTo(move){
        setCurrentMove(move);
    }
    const moves = history.map((squares,move)=>{
       let content;
       if(move>0){
        content="Go to move # "+move;
       }else{
        content="Go to game start";
       }
        return(
            <li key={move}>
                <button onClick={()=>{
                    jumpTo(move)
                }}>{content}</button>
            </li>
        )
    }
    )
    return(
        <div className="game">
            <div className="game-baord">
                <Board isXnext={currentMove%2===0} 
                squares={history[currentMove]}
                onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ul>{moves}</ul>
            </div>
        </div>
    )
}