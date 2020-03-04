console.log('pixart heyyy')

var swatch = document.querySelector('.swatch')
var colorInput = document.querySelector('.color-input')
var colorBtn = document.querySelector('.color-btn')
var colorForm = document.querySelector('.color-form')
var canvas = document.querySelector('.canvas')
var movieInput = document.querySelector('.movie-input')
var movieForm = document.querySelector('.movie-form')

var isDrawing = true


var handleColorSubmit = event => {
  event.preventDefault()
  swatch.style.backgroundColor = colorInput.value

}

// event bubbling
// event delegation
// having the parent handle it instead of the child
var handleMouseOver = event => {
  // only if you have other elements in that section
  if (isDrawing) {

    if (event.target.classList.contains('pixel')) {
      event.target.style.backgroundColor = swatch.style.backgroundColor
    }
  }
}

var handlePosterSubmit = event => {
  event.preventDefault()
  var title = movieInput.value
  var options = {
    url: `http://omdbapi.com/?t=${title}&apikey=2f6435d9`
  }
  var handleReponse = resp => {
    canvas.style.backgroundImage = `url('${resp.Poster}')`  
  }

  $.ajax(options).done(handleReponse)
}

var createPixelElem = () => {
  // build the loop to make all the pixel boxes
  var elem = document.createElement('div')
  elem.className = 'pixel'
  return elem
}

var makeCanvas = () => {
  
  for (i=0; i< 400; i++) {
    //building the object
    // get from html
    canvas.appendChild(createPixelElem())
  }
}






// var pixels = document.querySelectorAll('.pixel')

// pixels.forEach(pixel => {
//   pixel.addEventListener('click', handleClick)
// })


//find form
//listen for submit
// movieForm.addEventListener('submit', handleMovieSubmit)
// //handle submit
// var handleMovieSubmit = event => {
//   var title = input.value
//   var options = {
//     url: `http://omdbapi.com/?s=${title}&apikey=2f6435d9`
//   }
//   //inside handle sumbit make ajax request to omdb with the title from the input box

//                //callback is what we pass through done  
//   $.ajax(options).done(response => {
//     response.Search.forEach(movie => {
//       event.preventDefault()
//       // in the done callback function - set canvas background to poster
//       canvas.style.background = movie.Poster
      

//         })
//       })

// }


////




colorForm.addEventListener('submit', handleColorSubmit)
canvas.addEventListener('mouseover', handleMouseOver) 
movieForm.addEventListener('submit', handlePosterSubmit)

makeCanvas()