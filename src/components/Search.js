import React, {useState} from "react";

function Search({onSearch}) {
  const [search, setSearch] = useState("")

  function handleChange(event){
    onSearch(event.target.value)
    setSearch(search)
  }

  return (
    <div onChange={handleChange} className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={() => console.log("Searching...")}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
