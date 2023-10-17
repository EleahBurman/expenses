import { useState } from "react"
import { getCurrentDate } from "../util"
import propTypes from "prop-types";

function ExpenseForm({onAdd, bankAccounts}){
  const [title, setTitle]=useState("")
  const [amount, setAmount]=useState(0)
  const [date, setDate]=useState(getCurrentDate())

const handleSubmit = (evt) => {
  evt.preventDefault()
  onAdd({title, amount, date})
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
      <select required>
        <option value="">Please Select</option>
        {bankAccounts.map(({title})=>{
          return <option key={title}>{title}</option>
        })}
      </select>
      <label htmlFor="title">Title</label>
      <input 
        name="title" 
        value={title} 
        type="text" 
        onChange={(evt)=>setTitle(evt.target.value)}/>
      <label htmlFor="amount">Amount</label>
      <input 
        name="amount" 
        value={amount}
        type="number" 
        step="0.01" 
        min="0" 
        onChange={updateAmount}/>
      <label htmlFor="date">Date</label>
      <input 
        name="date" 
        value={date} 
        type="date" 
        onChange={(evt)=>setDate(evt.target.value)}/>
      <button>Add</button>
    </form>
  )
}

ExpenseForm.propTypes={
  onAdd: propTypes.func,
  bankAccounts: propTypes.array
}

export default ExpenseForm

//create a state variable
//wrap the select inside them
//submit on add
//if you let user delete expense tied to bank account (cascade or not cascade .. how to make it instance versus when it has to cascade)