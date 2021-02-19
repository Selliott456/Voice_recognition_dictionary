
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
          return updateErrorMessage('this word does not exist')
        })

    }
  }, [])
  
  if (!word) {
    return <h1>loading</h1>
  } else {
    return <div>
      <h1>{word.word && word.word}</h1>
      <span>{errorMessage}</span>
      {word.results && word.results.map((result, index) => {
        return <details key={index}>
          <summary>Result {index + 1}</summary>
          <h4>Definition</h4>
          <p >{result.definition}</p>
          <h4>Type of word</h4>
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

      <Link to="/">Home</Link>
    </div>
  }

}

export default Results