/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/main.scss'
import StoryDB from './story-db'
import * as UI from './ui'

// Create story database
const story = new StoryDB(require('./story.yaml'))

/**
 * Set story part to given id
 * 
 * @param {string} id ID of story part to set
 */
function selectStoryPart(id) {
    console.group('selectStoryPart')
    
    // Find story part
    console.log('Getting part with id: ' + id)
    let part = story.findPart(id)
    console.log(part)

    // Set part
    UI.setStoryPart(part)

    console.groupEnd()
}

// Let's start the freaking story!
document.title = story.title
UI.storyId$.subscribe(selectStoryPart)
selectStoryPart('$')