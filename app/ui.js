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
 * @param {{ text: string, id: string }} option option spec
 */
function createOptionButton(option) {
    let button = document.createElement('button')
    button.classList.add('option')
    button.innerText = option.text
    button.addEventListener('click', 
        () => storyId$.next(option.id))
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

// storyId subject
export const storyId$ = new Subject()

/**
 * Clear UI
 */
export function clear() {
    textArea.innerHTML = ''
    controlsArea.innerHTML = ''
}

/**
 * Set story part
 * 
 * @param {StoryPart} part story part to set
 */
export function setStoryPart(part) {
    // Set part
    clear()
    textArea.innerHTML = part.text
    let controlArea
    if (part.theend) {
        controlArea = createEndingArea(part.ending)
    }
    else {
        controlArea = createOptionsArea(part.options)
    }
    controlsArea.appendChild(controlArea)
}