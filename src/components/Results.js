
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        })
        .catch(function (error) {
          updateWord('')
          return updateErrorMessage('this word does not exist')
        })

    }
  })

  if (!word) {
    return <h1>loading</h1>
  } else {
    return <div>
      <h1>{word.word && word.word}</h1>
      <span>{errorMessage}</span>
      <ul>
        {word.results && word.results.map((result, index) => {
          return <li key={index}>{result.definition}</li>
        })}
      </ul>
    </div>
  }

}

export default Results