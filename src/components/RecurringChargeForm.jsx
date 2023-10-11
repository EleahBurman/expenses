import { useState } from "react";
import { getCurrentDate } from "../util";

function RecurringChargeForm() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [startDate, setStartDate] = useState(getCurrentDate());
  const [endDate, setEndDate] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ title, amount, startDate, endDate, frequency });
    // You can save or process this data as needed.
  };

  const updateAmount = (evt) => {
    let newValue = evt.target.value;
    if (Math.floor(newValue * 100) === newValue * 100) {
      newValue = Math.floor(newValue * 100) / 100;
    }
    setAmount(newValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={title}
        type="text"
        onChange={(evt) => setTitle(evt.target.value)}
      />
      <input
        name="amount"
        value={amount}
        type="number"
        step="0.01"
        min="0"
        onChange={updateAmount}
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        name="startDate"
        value={startDate}
        type="date"
        onChange={(evt) => setStartDate(evt.target.value)}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        name="endDate"
        value={endDate}
        type="date"
        onChange={(evt) => setEndDate(evt.target.value)}
      />
      <select
        name="frequency"
        value={frequency}
        onChange={(evt) => setFrequency(evt.target.value)}
      >
        <option value="monthly">Monthly</option>
        <option value="annually">Annually</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default RecurringChargeForm;
