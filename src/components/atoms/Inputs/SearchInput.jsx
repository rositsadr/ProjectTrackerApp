import React from 'react'

function SearchInput({value,changeHandler}) {
    return (
        <input type='search' value={value} onChange={changeHandler} placeholder='Type here...'></input>
    )
}

export default SearchInput