import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import logo from '../styles/logo.png'
import '../styles/style.scss'


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
 


  return <main id="mainHome">
    <img id="logo" src={logo} alt="logo"></img>
    <form onSubmit={handleSubmit}>
      <label className="enter">Enter a word!</label>
      <input
        placeholder="Enter word"
        type="text"
        onChange={handleChange}
        name="word"
      />
      <button>
        <Link className="search" to={{ pathname: '/results', aboutProps: { input } }}>Search</Link>
      </button>
    </form>
  </main>

}




export default Home