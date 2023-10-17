import { useState } from "react";
import propTypes from "prop-types";

function BankAccountForm({onAdd}) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAdd({ title, type, amount });
  }

  const updateAmount = (evt) => {
    let newValue = evt.target.value;
    if (Math.floor(newValue * 100) === newValue * 100) {
      newValue = Math.floor(newValue * 100) / 100;
    }
    setAmount(newValue);
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleTypeChange = (event) => {
    setType(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" value={title} type="text" onChange={handleTitleChange} />
      <label htmlFor="type">Type</label>
      <select value={type} onChange={handleTypeChange} required>
      <option value="">Please Select an Option</option>
        <option value="Checking">Checking</option>
        <option value="Saving">Saving</option>
      </select>
      <label 
        htmlFor="amount">Amount</label>
      <input 
        name="amount" 
        value={amount} 
        type="number" 
        step="0.01"
        min="0" 
        onChange={updateAmount} />
      <button type="submit">Submit</button>
    </form>
  )
}

BankAccountForm.propTypes={
  onAdd: propTypes.func
}

export default BankAccountForm;
