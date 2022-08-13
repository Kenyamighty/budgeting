import React from "react";
import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

//below now we have access to the .env values
const API = process.env.REACT_APP_API_URL;
function Index() {
  //useState returns an array
  const [transactions, setTransactions] = useState([]);
  //below we are making the api call and setting the state to the newly created date in index
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <section>
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </section>
    </div>
  );
}

export default Index;
