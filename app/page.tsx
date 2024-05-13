"use client"
import { useEffect, useState } from "react";
import Cell from "./components/Cell";
const winCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default function Home() {
  const [cells,updateCell] = useState(["","","","","","","","",""])
  const turns = ["circle","cross"]
  const [go,setGo] = useState(turns[Math.floor(Math.random()*turns.length)])
  const [winMessage,setWinMessage] = useState("")
  
  useEffect(()=>{
winCombos.forEach((combo)=>{
  const circleWins = combo.every((cell)=>cells[cell] === "circle")
  const crossWins = combo.every((cell)=>cells[cell] === "cross")

  if(circleWins){
setWinMessage("Circle Wins")
}else if(crossWins){
  setWinMessage("Cross Wins")
}

})
  },[cells])

useEffect(()=>{
  if(cells.every((cell) => cell !== "")&& !winMessage){
    setWinMessage("Draw")
  }
},[cells,winMessage])  
  return (
    <div className="root" >
<div className = "gameboard">
{cells.map((cell,index) =>  (<Cell winMessage = {winMessage} cell = {cell} cells ={cells} updateCell = {updateCell} id = {index} go ={go} setGo = {setGo} key={index}/>))}
</div>
<div>{winMessage}</div>
{!winMessage && <div>{`It's now ${go} turn`}</div>}
</div>
  );
}
