
import { useState } from 'react'
import './App.css'

function App() {
const [fName, setFName]= useState("")
const [lName, setLName]= useState("")
const [display,setDisplay]= useState("")

const handleSubmit= ()=>{
  setDisplay(`${fName} ${lName}`)
}
const handleFChange= (e)=>{
  setFName(e.target.value)
}
const handleLChange= (e)=>{
  setLName(e.target.value)
}

  return (
    <>
      <h1>
        Full Name Display
      </h1>
      <div>
        <label htmlFor="fName">First name : </label>
        <input type="text" id='fName' placeholder='First name' value={fName} onChange={(e)=>handleFChange(e)}/>
      </div>
      <div>
        <label htmlFor="lName">Last name : </label>
        <input type="text" id='lName' placeholder='Last name'  value={lName} onChange={(e)=>handleLChange(e)}/>
      </div>
      <button onClick={handleSubmit}>submit</button>

      <h2>{display}</h2>
    </>
  )
}

export default App
