import { useState } from "react";

function AddTransaction({getTransactions}){
    const [formData, setFormData] = useState({date: new Date(), description: "", category: "", amount: 25})
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:8001/transactions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
      const data = await response.json()
            console.log(data)
            // Handle the response as needed
          } catch (error) {
            console.error('Error submitting form:', error);
          }
    }

    const handleChange = (event) => {
        // Update the form data as the user types
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };


    return (
        <div>
            <form onSubmit={handleSubmit} action="http://localhost:8001/transactions" method="POST">
                <div>
                <label for="date">Date</label>
                <input id="date" type="date" name="date" value={formData.date}/>
                <input name="description" type="text" placeholder="description" id="description" value={formData.description} onChange={handleChange}/>
                <input name="category" type="text" placeholder="category" id="category" value={formData.category} onChange={handleChange}/>
                <input name="amount" type="number" value={formData.amount} id="amount" onChange={handleChange}/>
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;