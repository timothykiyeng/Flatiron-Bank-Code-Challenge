import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  function fetchTransaction() {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }
  useEffect(fetchTransaction, []);
  console.log(transactions);

  function handleUpdateOnSubmitting(newTransaction) {
    //console.log(newTransaction);
    setTransactions((transactions) => [...transactions, newTransaction]);

    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });
  }

  function handleOnSearch(search) {
    if (search === {}) {
      fetchTransaction(transactions);
    } else {
      setTransactions((transactions) =>
        transactions.filter((transaction) =>
          transaction.description.includes(search)
        )
      );
    }
  }

  console.log(transactions);
  return (
    <div>
      <Search onSearch={handleOnSearch} />
      <AddTransactionForm onSubmitting={handleUpdateOnSubmitting} />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
