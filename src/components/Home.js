import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const [input, updateInput] = useState('')
  const [search, updateSearch] = useState('')
 

  function handleChange(event) {
    const input = event.target.value
    console.log(event.target.value)
    updateInput(input)
  }
  function handleSubmit(event) {
    event.preventDefault()
    updateSearch(input)
  }

  

  return <main>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="word"
      />
      <button><Link  className="button" to={{ pathname: '/results', aboutProps: { input } }}>Search</Link>
      </button>
    </form>
    
  </main>

}




export default Home