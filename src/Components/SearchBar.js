import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close"

function SearchBar({placeholder, data}) {
    //Creates use state for filtered data
    const [filteredData, setFilterdData] = useState([]) 
    const [wordEntered, setWordEntered] = useState("") 

    //Filter through data to find search result
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilterdData([]);
        }
        else {
            setFilterdData(newFilter);
        }
    };
    
    //Clears the search
    const clearInput = () => {
        setFilterdData([]);
        setWordEntered("");
    }

  return (
    <div className='search'>
        <div className='search-inputs'>
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className='search-icon'>
                {filteredData.length === 0 ? 
                <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>
                }
            </div>
        </div>
        {filteredData.length !== 0 && (
        <div className='data-result'>
            {filteredData.slice(0, 15).map((value, key) => {
                return <a className='data-item' href={value.link} target="_blank" rel="noreferrer">
                   <p className='data-item-title'>{value.title}</p> 
                </a>
            })}
        </div>
        )}
    </div>
  )
}

export default SearchBar