
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
    return <div className="error">
      <h1>{errorMessage}</h1>
      <Link className="button" to="/">Enter Another Word</Link>
    </div>
  } else if (!search) {
    return <div className="error">
      <h1>You didn't enter a word!</h1>
      <Link className="button" to="/">Enter Another Word</Link>
    </div>
  } else if (!word) {
    return <div className="loader">
    </div>

  } else {
    return <div className="main" role="main">
      <h1 id="word">{word.word && word.word}</h1>
      <p className="instructions">Choose one of the results to see a definition!</p>
      {word.results && word.results.map((result, index) => {
        return <div key={index} className="container">
          <details >
            <summary id="summary">Definition no {index + 1}</summary>
            <section className="definition">
              <h2>Definition</h2>
              <p >{result.definition}</p>
            </section>
            <section className="extraInfo">
              <div className="row">
                <h3>Type of word: </h3>
                <p>{result.partOfSpeech}</p>
              </div>
              <h4>synonyms</h4>
              {result.synonyms && result.synonyms.map((word, index) => {
                return <div key={index}>
                  <p>{word}</p>
                </div>
              })}
            </section>
          </details>
        </div>
      })}
      <Link className="button" to="/">Home</Link>
    </div>
  }

}

export default Results