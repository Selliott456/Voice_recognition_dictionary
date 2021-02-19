import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Home = () => {

  const [input, updateInput] = useState('')
  const [search, updateSearch] = useState('')
  const [word, updateWord] = useState('')
  const [errorMessage, updateErrorMessage] = useState('')

  function handleChange(event) {
    const input = event.target.value
    console.log(event.target.value)
    updateInput(input)
  }
  function handleSubmit(event) {
    event.preventDefault()
    updateSearch(input)
  }

  useEffect(() => {
    if (search) {
      axios.get(`https://wordsapiv1.p.rapidapi.com/words/${search}`,
        {
          headers: {
            'x-rapidapi-key': 'f96f413727mshb0a323d38e44007p16f49bjsnba3a5e01400a',
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'useQueryString': true
          }
        })
        .then(resp => {
          updateWord(resp.data)
        })
        .catch(function (error) { 
          return updateErrorMessage("this word does not exist")
        })
    
    }
  }, [search])

  console.log(word.results)

  return <main>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="word"
      />
      <button>Search</button>
    </form>

    <h1>{word.word && word.word}</h1>
    <span>{errorMessage}</span>
    <ul>
      {word.results && word.results.map((result, index) => {
        if (!result) {
          return<h1> no result </h1>
        }
        return <li key={index}>{result.definition}</li>
      })}
    </ul>
  </main>

}




export default Home