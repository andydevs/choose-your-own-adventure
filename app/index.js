/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/main.scss'
import story from './story.json'

// Error part
let errorPart = {
    id: '-1',
    text: `Well... looks like you entered a part of 
        the story that doesn\'t exist... how about that?`,
    options: [
        {
            id: '0',
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
let optionsArea = document.getElementById('options')

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
    setOptions(part.options)

    // End console group
    console.groupEnd()
}

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
        optionsArea.appendChild(button)        
    }
}

function clear() {
    textArea.innerHTML = ''
    optionsArea.innerHTML = ''
}

// Set initial part
selectStoryPart('0')