import React, { useRef } from 'react'
import { useState } from 'react'
import './SearchForm.scss'

function SearchForm({setSearch}) {
  const inputRef = useRef() 
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    const value = inputRef.current.value.trim()

    if (!value) {
      setError('Please enter a valid location ID 🥒')
      return
    }

    if (isNaN(+value)) {
      setError('Please enter a valid number 🥒')
      return
    }

    if (+value < 1 || +value > 126) {
      setError('Hey! you must provide an id from 1 to 126 "Wubba lubba dub dub"')
      return
    }


    setSearch(value)
    inputRef.current.value = ''

  }
  return (
    <form className='search' onSubmit={handleSubmit}>
      <div className='container'>
      <input className='search__input' type="text" ref={inputRef} placeholder='Enter a Location ID'/>
      <button className='search__btn'>Search</button>
      {error && <p className='search__error'>{error}</p>}
    </div>
    </form>
  )
}

export default SearchForm
