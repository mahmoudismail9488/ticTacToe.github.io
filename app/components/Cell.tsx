import { Dispatch, MouseEventHandler, SetStateAction } from "react"

type cellProps = {
    id : number,
    go:string,
    setGo: Dispatch<SetStateAction<string>>,
    cells: string[],
    updateCell: Dispatch<SetStateAction<string[]>>,
    cell: string,
    winMessage:string
}

const Cell = ({go,setGo,id,cells,updateCell,cell,winMessage}:cellProps)=>{
    const handleClick = () => {
        if (winMessage){
            return
        }
        const notTaken = !cells[id]
        if (notTaken){
            if (go === "circle"){
                handleCell("circle")
                setGo("cross")
            }else{
                handleCell("cross")
                setGo("circle")
            }
        }
        
    }
    const handleCell = (cellName:string) => {
        const copyCells = [...cells]
        copyCells[id] = cellName
        updateCell(copyCells)
    }
    return (<div className="cell" onClick={handleClick}>
<div className={cell}>{cell? (cell === "circle"? "O":"X"):""}</div>
    </div>)
}
export default Cell