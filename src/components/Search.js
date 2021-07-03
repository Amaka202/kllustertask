import React from 'react'
import '../styles/search.css';

function Search({ searchWord, setSearchWord }) {

    return (
        <form className='search-container'>
            <input
                type='search'
                placeholder='Search for jobs...'
                defaultValue={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
        </form>
    )
}

export default Search;
