/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import { Subject } from "rxjs";

// Document areas
const textArea = document.getElementById('cyoa-text')
const controlsArea = document.getElementById('cyoa-controls')

/**
 * Create option button
 * 
 * @param {object} option option spec
 */
function createOptionButton(option) {
    let button = document.createElement('button')
    button.classList.add('option')
    button.innerText = option.text
    button.addEventListener('click', () => {
        if (option.id === '$') { textArea.innerHTML = '' }
        storyId$.next(option)
    })
    return button
}

/**
 * Create options control area
 * 
 * @param {Array} options options array
 */
function createOptionsArea(options) {
    let optionsArea = document.createElement('div')
    optionsArea.classList.add('options')
    let button
    for (const option of options) {
        button = createOptionButton(option)
        optionsArea.appendChild(button)
    }
    return optionsArea
}

/**
 * Create ending control area
 * 
 * @param {string} ending ending text
 */
function createEndingArea(ending) {
    // Create ending area
    let endingArea = document.createElement('div')
    endingArea.classList.add('ending')

    // Create ending text
    let endingText = document.createElement('p')
    endingText.classList.add('ending-text')
    endingText.innerHTML = ending
    endingArea.appendChild(endingText)

    // Create play again option
    let button = createOptionsArea([
        { id: '$', text: 'Play Again' }
    ])
    endingArea.appendChild(button)

    // Return ending area
    return endingArea
}

// storyId subject
export const storyId$ = new Subject()

/**
 * Update story with new part and option picked
 * 
 * @param {object} option option selected
 * @param {object} part   story part to set
 */
export function updateStory(option, part) {
    let partDom = document.createElement('div')
    partDom.classList.add('part')
    if (option.id !== '$') {
        let partOptionDom = document.createElement('p')
        partOptionDom.classList.add('part-option')
        let partOptionTextDom = document.createElement('span')
        partOptionTextDom.classList.add('option')
        partOptionTextDom.innerHTML = option.text
        partOptionDom.appendChild(partOptionTextDom)
        partDom.append(partOptionDom)
    }
    let partTextDom = document.createElement('p')
    partTextDom.classList.add('part-text')
    partTextDom.innerHTML = part.text
    partDom.appendChild(partTextDom)

    // Set part
    textArea.appendChild(partDom)
    partDom.scrollIntoView(false)
    
    // Set controls
    let controlArea
    if (part.theend) { controlArea = createEndingArea(part.ending) }
    else { controlArea = createOptionsArea(part.options) }
    controlsArea.innerHTML = ''
    controlsArea.appendChild(controlArea)
}

/**
 * Initialize UI
 */
export function initialize(part) {
    // Make sure UI is clear
    textArea.innerHTML = `<div class='part'><p class='part-text'>${part.text}</p></div>`
    controlsArea.innerHTML = ''
    controlsArea.appendChild(createOptionsArea(part.options))
}