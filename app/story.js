/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import storyData from './story.yaml'

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
export default {
    // Expand story data into object
    ...storyData,

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