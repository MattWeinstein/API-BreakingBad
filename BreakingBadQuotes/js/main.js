//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click',getQuote)
function getQuote(){    
  console.log('hello')
    const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let result = data[0]
      document.querySelector('h2').innerHTML=`"${result.quote}"`
      document.querySelector('h3').innerHTML=result.author
      document.querySelector('img').src=`photos/${(result.author).split(' ').join('')}.png`

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
