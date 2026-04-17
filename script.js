const colourPicker = document.querySelector('.colour')
const reset = document.querySelector('.reset')
const lines = document.querySelector('#lines')
const size = document.querySelectorAll('.size input')
const gridInput = document.querySelector('#gridInput')
const gridInputSize = document.querySelector('#gridSize')
const eraser = document.querySelector('#eraser')
let colour = colourPicker.value;
let gridSize = 32;

eraser.addEventListener('click', (e) => {
  colour = '#FFFFFF'
})

colourPicker.addEventListener('input', (e) => {
  colour = e.target.value;
})

function generateGrid(num) {
  const container = document.querySelector('#container')
  container.innerHTML = ''
  let grid = num * num
  for (let i = 0; i < grid; i++) {
    const gridDiv = document.createElement('div')
    let size = 960/num
    container.classList.add('grid')
    gridDiv.classList.add('gridEl')
    gridDiv.style.width = `${size}px`
    gridDiv.style.height = `${size}px`
    lines.addEventListener('click', () => {
      gridDiv.classList.toggle('lines')
    })
    gridDiv.addEventListener('mouseover', colourChange)
    container.appendChild(gridDiv)
  }
}

const setColour = (newColour) => {
  colour = newColour;
}

function colourChange(e) {
  setColour(colour)
  e.target.style.backgroundColor = colour
}

function setSize(size) {
  gridSize = size;
}

reset.addEventListener('click', () => {
  location.reload()
})

gridInput.textContent = '32 x 32';
gridInputSize.addEventListener("input", (e) => {
  gridInput.textContent = `${e.target.value} x ${e.target.value}`;
})

size.forEach(button => {
  button.addEventListener('click', (e) => {
    gridSize = e.target.value;
    setSize(gridSize)
    generateGrid(gridSize)
  })
})

generateGrid(gridSize)