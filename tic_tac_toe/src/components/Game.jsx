import { useState } from "react";
import Board from "./Board";
export default function Game (){
    const [history,setHistory] = useState([Array(9).fill(null)]);
    return(
        <div className="game">
            <div className="game-baord">
                <Board/>
            </div>
            <div className="game-info">
                <ul>{}</ul>
            </div>
        </div>
    )
}