import { useEffect } from "react";
import AddTransaction from "./AddTransaction";

function Tables({transactions, getTransactions}){
    useEffect(()=>{
        fetch("http://localhost:8001/transactions")
        .then(response=>response.json())
        .then(data=>{
          console.log(data)
          // setTransactions(prevTransaction => [...prevTransaction, data])
          getTransactions(data)
        })
  },[])
  
    return(
        <div>
        <table>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>

          {transactions && (
            transactions.map(transaction=>(
              <tr>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))
          )}
        </table>
      </div>
    );
}
export default Tables;