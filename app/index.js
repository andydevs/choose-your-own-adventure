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

function findStoryPart(id) {
    for (const part of story.parts) {
        if (part.id === id) {
            return part
        }
    }
    return errorPart
}

// Get text and options
let textArea = document.getElementById('text')
let controlsArea = document.getElementById('controls')

function setText(text) {
    textArea.innerHTML = text
}

function setOptions(options) {
    let button
    for (const option of options) {
        button = document.createElement('button')
        button.classList.add('option')
        button.innerText = option.text
        button.addEventListener('click', function() {
            selectStoryPart(option.id)
        })
        controlsArea.appendChild(button)        
    }
}

function setEnding(ending) {
    let endText = document.createElement('p')
    endText.classList.add('ending-text')
    endText.innerHTML = ending
    controlsArea.appendChild(endText)
    let button = document.createElement('button')
    button.classList.add('option')
    button.innerText = 'Play Again'
    button.addEventListener('click', function() {
        selectStoryPart('$')
    })
    controlsArea.appendChild(button)
}

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

    // End console group
    console.groupEnd()
}

function clear() {
    textArea.innerHTML = ''
    controlsArea.innerHTML = ''
}

// Let's get this story goin!
document.title = story.title
selectStoryPart('$')