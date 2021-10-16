function create_grid(width,height){
    const container = document.querySelector('#container')
    let buttonWidth = (800/width) + "px"
    let buttonHeight = (800/height) + "px"
    for (i=1; i<=(height*width); i++){
        const square = document.createElement("div")
        square.classList.add('square')
        square.style.backgroundColor = "white"
        square.style.height = buttonHeight
        square.style.width = buttonWidth
        square.style.border = "1px solid black"
        container.appendChild(square)
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black"
    })
    }
}
/* Remove button function */
const remove = document.querySelector('#remove')
remove.addEventListener('click', () => {
    const container = document.querySelector('#container')
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }
})
const create = document.querySelector("#create")
create.addEventListener('click', () => {
    let height = prompt("How many vertical squares do you want?")
    if (height>100) {
        while (height>100) {
            height = prompt("Less please")
        }
    }
    let width = prompt("How many horizontal squares do you want?")
    if (width>100) {
        while (width>100) {
            width = prompt("Less please")
        }
    }
    create_grid(width, height)
})