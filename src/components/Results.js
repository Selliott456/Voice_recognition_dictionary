
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Results = (props) => {

  const [word, updateWord] = useState('')
  const [errorMessage, updateErrorMessage] = useState('')
  const search = props.location.aboutProps.input

  console.log(props)

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
          updateErrorMessage('')
          updateWord(resp.data)
          console.log(resp.data)
        })
        .catch(function (error) {
          updateWord('')
          return updateErrorMessage('This word does not exist')
        })

    }
  }, [])

  if (errorMessage) {
    return <div><h1>{errorMessage}</h1>
      <Link className="button" to="/">Enter Another Word</Link>
    </div>
  } else if (!search) {
    return <div>
      <h1>You didn't enter a word!</h1>
      <Link className="button" to="/">Enter Another Word</Link>
    </div>

  } else if (!word) {
    return <h1>Loading</h1>
  } else {
    return <div role="main">
      <h1>{word.word && word.word}</h1>
      {word.results && word.results.map((result, index) => {
        return <details key={index}>
          <summary id="summary">Result {index + 1}</summary>
          <h2>Definition</h2>
          <p >{result.definition}</p>
          <h3>Type of word</h3>
          <small>{result.partOfSpeech}</small>
          <h4>synonyms</h4>
          <ul>
            {result.synonyms && result.synonyms.map((word, index) => {
              return <div key={index}>
                <li>{word}</li>
              </div>
            })}
          </ul>
        </details>
      })}

      <Link className="button" to="/">Home</Link>
    </div>
  }

}

export default Results