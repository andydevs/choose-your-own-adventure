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
 * Create options control area
 * 
 * @param {[{ text: string, id: string }]} options options array
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
    let button = createOptionButton({
        id: '$',
        text: 'Play Again'
    })
    endingArea.appendChild(button)

    // Return ending area
    return endingArea
}

// Create UI object
const UI = {
    // Document areas
    textArea: document.getElementById('cyoa-text'),
    controlsArea: document.getElementById('cyoa-controls'),

    // Clear UI
    clear() {
        this.textArea.innerHTML = ''
        this.controlsArea.innerHTML = ''
    },

    // Set story part
    setStoryPart(part) {
        // Set part
        this.clear()
        this.textArea.innerHTML = part.text
        let controlArea
        if (part.theend) {
            controlArea = createEndingArea(part.ending)
        }
        else {
            controlArea = createOptionsArea(part.options)
        }
        this.controlsArea.appendChild(controlArea)
    }
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
    UI.setStoryPart(part)

    console.groupEnd()
}

// Let's start the freaking story!
document.title = story.title
selectStoryPart('$')