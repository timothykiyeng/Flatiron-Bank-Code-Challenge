import React, { useState } from "react";

function AddTransactionForm({ onSubmitting }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0.01
  });
  function handleChangeAction(event) {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  }

  function handleSubmitAction(event) {
    event.preventDefault();
    onSubmitting(formData);
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0.01,
    });
  }

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmitAction} onChange={handleChangeAction} className="ui form">
        <div className="inline fields">
          <input value={formData.date} type="date" name="date" />
          <input
            value={formData.description}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={formData.category}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={formData.amount}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
