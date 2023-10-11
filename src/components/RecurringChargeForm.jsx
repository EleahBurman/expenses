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

  };

  const updateAmount = (evt) => {
    let newValue = evt.target.value;
    if (Math.floor(newValue * 100) === newValue * 100) {
      newValue = Math.floor(newValue * 100) / 100;
    }
    setAmount(newValue);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleStartDateChange = (evt) => {
    setStartDate(evt.target.value)
  }

  const handleEndDateChange = (evt) => {
    setEndDate(evt.target.value)
  }

  const handleFrequencyChange = (evt) => {
    setFrequency(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        value={title}
        type="text"
        onChange={handleTitleChange} 
      />
      <label htmlFor="amount">Amount</label>
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
        onChange={handleStartDateChange}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        name="endDate"
        value={endDate}
        type="date"
        onChange={handleEndDateChange}
      />
      <label htmlFor="frequency">Frequency</label>
      <select
        name="frequency"
        value={frequency}
        onChange={handleFrequencyChange}
      >
        <option value="monthly">Monthly</option>
        <option value="annually">Annually</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default RecurringChargeForm;
