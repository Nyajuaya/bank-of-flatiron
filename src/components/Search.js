import { useState } from "react";

function Search({transactions, getTransactions}){
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])


    const handleSubmit = (event)=>{
      event.preventDefault();
    }

    const handleChange = (event)=>{
      const term = event.target.value.toLowerCase();
      setSearchTerm(term)
      const results = transactions.filter((data)=> data.description.toLowerCase().includes(searchTerm))
      setSearchResults(results)
      console.log(searchResults);
      getTransactions(results)
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange}/>
          <button>submit</button>
        </form>

      </div>
    );
}

export default Search;