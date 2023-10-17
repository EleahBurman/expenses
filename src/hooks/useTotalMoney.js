import useBankAccounts from "./useBankAccounts"
import useExpenses from "./useExpenses"

export default function useTotalMoney(){

  const {addBankAccount, bankAccounts}=useBankAccounts()
  const {addExpense, expenses}=useExpenses()


  return{
    addBankAccount,
    bankAccounts,
    addExpense,
    expenses
  }
}