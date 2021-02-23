# Speech Recognition Dictionary

## Overview

I began this project based on an issue I had in my previous career. As part of our marking cycle we were required to highlight spelling and grammar errors with a highlighter and instruct the student to find the correction. I soon found that there was an issue with this as a lot of my students struggled to use a real dictionary and did not know what a lot of the words started with. This meant no progess was made in terms of their literacy. 

Literacy is one of the biggest factors that affects life chances. People with poor literacy have higher chances of going to prison and lower life expectancy. So this is my tiny contribution to improving their chances! 

you can find the live site here: https://confident-neumann-d2911d.netlify.app/

## Technologies Used

- React
- node.js
- JSX
- Sass

## Approach

I initially planned to create a fullstack app here that allowed users to store words and defintitions that they struggled with (the backened  is actuall in a repository called Python Practice) but I wanted to also launch a really simple frontend for speed without the need to register etc. This is it! 

## Method

I created a react app comprised of two components; Home and Results. The home screen used a node package called @untemps/react-vocal in order to capture a variable called results. This was then set as the value of the input using state and passed to the Results component via props. A couple of functions were then written to allow the input submission to be captured and stored in a named variable, again using state:

``` <input
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
```

In the Results component, I accessed the Words API in order to return an object which contained various definitions. I was then able to map the definitions and render them to the page.
```useEffect(() => {

    if (search) {
      axios.get(`https://wordsapiv1.p.rapidapi.com/words/${search}`,
        {
          headers: {
           XXXXXXXXXXX
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
  ```
  
  ## Challenges 
  
 I had a bit of bother with the speech recognition package as it required a few more supporting packages and the docs weren't explicit about that. I also had to take a bit of time to figure out how to use my API key specific to the Words API. All in all, it was quite a smooth production. 
  
## Key learnings

I can now use this speech package for a great deal of things which may make my web apps more accessible in the future. I also learned that the quality of the Words API isn't good enough for commerical use, so I'd make a real effort to avoid it if the product had to be scalable.

## Future Enhancements/ Issues

The Words Api is pretty bad. The most obvious definition isn't always the top (or even the top 3) result. This really binds your hands at this level and causes you to have to volunteer EVERY result to the user. This really messes up the UI/UX. 
  
