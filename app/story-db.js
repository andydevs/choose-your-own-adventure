/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */

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
 * Story "Database" holds story parts for easy access
 */
export default class StoryDB {
    /**
     * Create story database from story file data
     * 
     * @param {Story} story story file data
     */
    constructor(story) {
        this.title = story.title
        this.description = story.description
        this.author = story.author
        this.parts = story.parts
    }

    /**
     * Find story part given id
     * 
     * @param {string} id ID of the story port
     */
    findPart(id) {
        for (const part of this.parts) {
            if (part.id === id) {
                return part
            }
        }
        return errorPart
    }
}