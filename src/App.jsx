import ExpenseForm from "./components/ExpenseForm"
import BankAccountForm from "./components/BankAccountForm"
import RecurringChargeForm from "./components/RecurringChargeForm"
import useTotalMoney from "./hooks/useTotalMoney"


function App() {
const {    
    addBankAccount,
    bankAccounts,
    addExpense,
    expenses
  }=useTotalMoney()

  return (
    <>
      <h1>Expenses are Expensive</h1>
      <h2>Bank Accounts</h2>
      <BankAccountForm onAdd={addBankAccount}/>
      {JSON.stringify(bankAccounts)}
      <h2>Daily Expenses</h2>
      <ExpenseForm onAdd={addExpense} bankAccounts={bankAccounts}/>
      {JSON.stringify(expenses)}
      <h2>Recurring Expenses</h2>
      <RecurringChargeForm/>
    </>
  )
}

export default App
