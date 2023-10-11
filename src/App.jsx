import ExpenseForm from "./components/ExpenseForm"
import BankAccountForm from "./components/BankAccountForm"
import RecurringChargeForm from "./components/RecurringChargeForm"

function App() {
  

  return (
    <>
      <h1>Expenses are Expensive</h1>
      <h2>Bank Accounts</h2>
      <BankAccountForm/>
      <h2>Daily Expenses</h2>
      <ExpenseForm/>
      <h2>Recurring Expenses</h2>
      <RecurringChargeForm/>
    </>
  )
}

export default App
