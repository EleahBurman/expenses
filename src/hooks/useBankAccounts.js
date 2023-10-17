import { useState } from "react"

export default function useBankAccounts(){
  //create a state variable the getter of which has bank accounts
  const [bankAccounts, setBankAccounts]=useState([])
  //adding entry into an ordered list or array - helper function
  const addBankAccount= (bankAccountInfo)=>{
    setBankAccounts((prevBankAccounts)=>{
      return [
        ...prevBankAccounts,
        bankAccountInfo
      ]
    })
  }

  return {addBankAccount, bankAccounts}

}