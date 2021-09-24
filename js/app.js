const board = document.querySelector('#board')
const colors = ['#e23737', '#cecb10', '#46ce10', '#102dce', '#810b7b']
const SQUARE_NUM = 726

for (let index = 0; index < SQUARE_NUM; index++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseout', () => {
        removeColor(square)
    })


    board.append(square)
}

const setColor = (element) => {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
    element.style.backgroundColor = '#fff'
    element.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}