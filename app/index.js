/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/main.scss'
import story from './story.yaml'

// Error part
let errorPart = {
    id: '~',
    text: `Well... looks like you entered a part of 
        the story that doesn\'t exist... how about that?`,
    options: [
        {
            id: '$',
            text: 'Go to the beginning'
        }
    ]
}

/**
 * Find story part given id
 * 
 * @param {string} id ID of the story port
 */
function findStoryPart(id) {
    for (const part of story.parts) {
        if (part.id === id) {
            return part
        }
    }
    return errorPart
}

// Get text and controls area of element
let textArea = document.getElementById('text')
let controlsArea = document.getElementById('controls')

/**
 * Clear UI
 */
function clear() {
    textArea.innerHTML = ''
    controlsArea.innerHTML = ''
}

/**
 * Create option button
 * 
 * @param {{ text: string, id: string }} option option spec
 */
function createOptionButton(option) {
    let button = document.createElement('button')
    button.classList.add('option')
    button.innerText = option.text
    button.addEventListener('click', function() {
        selectStoryPart(option.id)
    })
    return button
}

/**
 * Set text of story part on page
 * 
 * @param {string} text Text of story part
 */
function setText(text) {
    textArea.innerHTML = text
}

/**
 * Set options on page
 * 
 * @param {[{ text: string, id: string }]} options list of option specs
 */
function setOptions(options) {
    let button
    for (const option of options) {
        button = createOptionButton(option)
        controlsArea.appendChild(button)        
    }
}

/**
 * Set ending text onto page
 * 
 * @param {string} ending ending text
 */
function setEnding(ending) {
    // Set ending text
    let endText = document.createElement('p')
    endText.classList.add('ending-text')
    endText.innerHTML = ending
    controlsArea.appendChild(endText)

    // Create Play Again Button
    let button = createOptionButton({
        id: '$',
        text: 'Play Again'
    })
    controlsArea.appendChild(button)
}

/**
 * Set story part to given id
 * 
 * @param {string} id ID of story part to set
 */
function selectStoryPart(id) {
    console.group('selectStoryPart')
    
    // Find story part
    console.log('Selecting part with id ' + id)
    let part = findStoryPart(id)
    console.log('Part:')
    console.log(part)

    // Set part
    clear()
    setText(part.text)
    if (part.theend) {
        setEnding(part.ending)
    } else {
        setOptions(part.options)
    }

    console.groupEnd()
}

// Let's get this story goin!
document.title = story.title
selectStoryPart('$')