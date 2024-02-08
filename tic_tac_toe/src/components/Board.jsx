import { useState ,useRef } from "react"
function Square({data,handleClick,isWinner}){
    return (
        <button className={`square ${isWinner?'winner':''}`}
        onClick={
            handleClick
        }>{data}</button>
    )
}

export default function Board({isXnext,squares,onPlay}){
        const [isWinner,setIsWinner] = useState([])
        let movesPlayed = useRef(0);
        let status;
        const winner=calculateWinner(squares)
        if(winner){
            if(winner==='draw'){
                status="Drawed !! ";
            }else{
                status="Winner : "+squares[winner[0]];
                if(isWinner.length === 0) {
                    //console.log(winner)
                    setIsWinner(winner)
                }
            }
        }else{
            status="Next Player : "+(isXnext? "X" :"O");
        }
        function handleClick(index){
            if(calculateWinner(squares) || squares[index]) return;
            const nextSquares = squares.slice();
            nextSquares[index]=isXnext?"X":"O";
            onPlay(nextSquares);
            movesPlayed.current+=1;
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
                return lines[i];
              }
            }
            if(movesPlayed.current === squares.length){
                return "draw";
            }
            return null;
        }
        
        function renderRow(rowIndex,rowKey){
            let row=[]
            for(let j=0;j<3;j++){
                row.push(
                    <Square data={squares[3*rowIndex+j]} key={3*rowIndex+j} handleClick={()=>{
                        handleClick(3*rowIndex+j)
                    }}
                    isWinner={isWinner.includes(3*rowIndex+j)}/> 
                );
            }
            return <div key={rowKey} className="board-row">{row}</div>;
        }
        function renderBoard(){
            let board=[];
            for(let i=0;i<3;i++){
                board.push(renderRow(i,i));
            }
            return board;
        }
        return(
            <>
                <div className="status">{status}</div>
                <div>{renderBoard()}</div>
                {/* <div className="board-row">
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
                </div> */}
            </>
        )
}