import { useEffect, useState } from "react";
import Search from "./components/Search";
import Tables from "./components/Tables";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [transactions, setTransactions] = useState([])

  const getTransactions = (data)=>{
    setTransactions(data)
  }
  
  return (
    <div className="App">
      <h1>The Royal Bank of Fatiron</h1>
      <Search transactions={transactions} getTransactions={getTransactions}/>
      <AddTransaction getTransactions={getTransactions} />
      <Tables transactions={transactions} getTransactions={getTransactions}/>
    </div>
  );
}

export default App;
