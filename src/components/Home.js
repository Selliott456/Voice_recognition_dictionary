
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../styles/logo.png'
import '../styles/style.scss'
import 'core-js/stable'
import regeneratorRuntime from 'regenerator-runtime'
import Vocal from '@untemps/react-vocal'


const Home = () => {

  const [result, setResult] = useState('')
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

  const _onVocalStart = () => {
    setResult('')
  }

  const _onVocalResult = (result) => {
    setResult(result)
    updateInput(result)
  }



  return <main id="mainHome">
    <img id="logo" src={logo} alt="logo"></img>
    <form onSubmit={handleSubmit}>
      <label className="enter">Enter a word!</label>
      <input
        defaultValue={result}
        placeholder="Enter word"
        type="text"
        onChange={handleChange}
        name="word"
      />
      <button>
        <Link className="search" to={{ pathname: '/results', aboutProps: { input } }}>Search</Link>
      </button>
    </form>
    <div className="App">
      <span style={{ position: 'relative' }}>
        <Vocal
          className="vocal"
          onStart={_onVocalStart}
          onResult={_onVocalResult}
        />
      </span>
    </div>
  </main>

}




export default Home