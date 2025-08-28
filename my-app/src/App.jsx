import { useState } from "react"
import "./App.css"

function generateBoard() {
  return [
    [5, 3, null, null, 7, null, null, null, null],
    [6, null, null, 1, 9, 5, null, null, null],
    [null, 9, 8, null, null, null, null, 6, null],
    [8, null, null, null, 6, null, null, null, 3],
    [4, null, null, 8, null, 3, null, null, 1],
    [7, null, null, null, 2, null, null, null, 6],
    [null, 6, null, null, null, null, 2, 8, null],
    [null, null, null, 4, 1, 9, null, null, 5],
    [null, null, null, null, 8, null, null, 7, 9],
  ]
}

export default function Sudoku() {
  const [board, setBoard] = useState(generateBoard())
  const [selected, setSelected] = useState(null)

  function handleChange(r, c, v) {
    if (isNaN(v) || v < 1 || v > 9) return
    const newBoard = board.map(row => [...row])
    newBoard[r][c] = parseInt(v)
    setBoard(newBoard)
    setSelected([r, c])
  }

  function resetCell() {
    if (!selected) return
    const [r, c] = selected
    const newBoard = board.map(row => [...row])
    newBoard[r][c] = null
    setBoard(newBoard)
    setSelected(null)
  }

  return (
    <div>
      <div className="sudoku">
        {board.map((row, r) => (
          <div key={r} className="row">
            {row.map((cell, c) => (
              <input
                key={c}
                value={cell || ""}
                onChange={e => handleChange(r, c, e.target.value)}
                onClick={() => setSelected([r, c])}
                className="cell"
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={resetCell} className="reset-btn">Reset Cell</button>
    </div>
  )
}
