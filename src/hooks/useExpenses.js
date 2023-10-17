import { useState } from "react"

export default function useExpenses(){
  //create a state variable the getter of which has bank accounts
  const [expenses, setExpenses]=useState([])
  //adding entry into an ordered list or array - helper function
  const addExpense= (expenseInfo)=>{
    //function takes previous state of a variable
    setExpenses((prevExpenses)=>{
      return [
        ...prevExpenses,
        expenseInfo
      ]
    })
  }

  return {addExpense, expenses}

}