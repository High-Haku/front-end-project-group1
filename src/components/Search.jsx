import React, { useState } from "react";
import {InputGroup, FormControl, Button} from "react-bootstrap"

function Search({setSearch}) {
  const [searchInput, setSearchInput] = useState('');

  function handleClick() {
    setSearch(searchInput);
  }

  return (
    <>
      <InputGroup size="sm" style={{minWidth:"300px", width:"30vw"}}>
        <FormControl
          placeholder="search book by title..."
          aria-label="search book by title..."
          aria-describedby="basic-addon2"
          id="searchInput"
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.keyCode === 13 ? handleClick() : false}
        />
        <Button variant="success" id="button-addon2" onClick={handleClick} >
          Search
        </Button>
      </InputGroup>
    </>
  );
}

export default Search;
