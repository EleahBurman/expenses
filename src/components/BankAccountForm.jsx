import { useState } from "react";

function BankAccountForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ title, type, amount });
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
      <input name="title" value={title} type="text" onChange={handleTitleChange} />

      <select value={type} onChange={handleTypeChange}>
        <option value="Checking">Checking</option>
        <option value="Saving">Saving</option>
      </select>

      <input name="amount" value={amount} type="number" step="0.01" min="0" onChange={updateAmount} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default BankAccountForm;
