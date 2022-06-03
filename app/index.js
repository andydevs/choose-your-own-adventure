/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/main.scss'
import story from './story'
import * as UI from './ui'

/**
 * Set story part to given id
 * 
 * @param {object} option option selected
 */
function selectStoryPart(option) {
    console.group('selectStoryPart')
    console.log('You picked: ' + option.text)
    
    // Find story part
    console.log('Getting part with id: ' + option.id)
    let part = story.findPart(option.id)
    console.log(part)

    // Set part
    UI.updateStory(option, part)

    console.groupEnd()
}

// Let's start the freaking story!
document.title = story.title
UI.storyId$.subscribe(selectStoryPart)
UI.initialize(story.findPart('$'))