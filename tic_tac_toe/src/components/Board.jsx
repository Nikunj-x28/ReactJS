import { useState } from "react"
function Square({data,handleClick}){
    return (
        <button className="square"
        onClick={
            handleClick
        }>{data}</button>
    )
}

export default function Board(){
        const [squares,setSquares] = useState(Array(9).fill(null));
        const [xmove,setXmove] = useState(true);
        let status;
        const winner=calculateWinner(squares)
        if(winner){
            status="Winner : "+winner;
        }else{
            status="Next Player : "+(xmove? "X" :"O");
        }
        function handleClick(index){
            if(calculateWinner(squares) || squares[index]) return;
            const nextSquares = squares.slice();
            nextSquares[index]=xmove?"X":"O";
            setSquares(nextSquares);
            setXmove(!xmove)
        }
        function calculateWinner(squares) {
            const lines = [
              [0, 1, 2],
              [3, 4, 5],
              [6, 7, 8],
              [0, 3, 6],
              [1, 4, 7],
              [2, 5, 8],
              [0, 4, 8],
              [2, 4, 6]
            ];
            for (let i = 0; i < lines.length; i++) {
              const [a, b, c] = lines[i];
              if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
              }
            }
            return null;
        }
        return(
            <>
                <div className="status">{status}</div>
                <div className="board-row">
                    <Square data={squares[0]} handleClick={()=>
                        {
                            handleClick(0)
                        }
                        }/>
                    <Square data={squares[1]} handleClick={()=>
                        {
                            handleClick(1)
                        }
                        }/>
                    <Square data={squares[2]} handleClick={()=>
                        {
                            handleClick(2)
                        }
                        }/>
                </div>
                <div className="board-row">
                    <Square data={squares[3]} handleClick={()=>
                        {
                            handleClick(3)
                        }
                        }/>
                    <Square data={squares[4]} handleClick={()=>
                        {
                            handleClick(4)
                        }
                        }/>
                    <Square data={squares[5]} handleClick={()=>
                        {
                            handleClick(5)
                        }
                        }/>
                </div>
                <div className="board-row">
                    <Square data={squares[6]} handleClick={()=>
                        {
                            handleClick(6)
                        }
                        }/>
                    <Square data={squares[7]} handleClick={()=>
                        {
                            handleClick(7)
                        }
                        }/>
                    <Square data={squares[8]} handleClick={()=>
                        {
                            handleClick(8)
                        }
                        }/>      
                </div>
            </>
        )
}