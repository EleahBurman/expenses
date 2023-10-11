import { useState } from "react"
import { getCurrentDate } from "../util"


function ExpenseForm(){
  const [title, setTitle]=useState("")
  const [amount, setAmount]=useState(0)
  const [date, setDate]=useState(getCurrentDate())

const handleSubmit = (evt) => {
  evt.preventDefault()
  console.log({title, amount, date})
}

const updateAmount = (evt) => {
  let newValue = evt.target.value
  if (Math.floor(newValue*100)===newValue*100){
    newValue=(Math.floor(newValue*100)/100)
  }
  setAmount(newValue)
}
  return (
    <form onSubmit= {handleSubmit}>
      <input name="title" value={title} type="text" onChange={(evt)=>setTitle(evt.target.value)}/>
      <input name="amount" value={amount}type="number" step="0.01" min="0" onChange={updateAmount}/>
      <input name="date" value={date} type="date" onChange={(evt)=>setDate(evt.target.value)}/>
      <button>Add</button>
    </form>
  )
}

export default ExpenseForm