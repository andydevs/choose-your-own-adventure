/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/paths.scss'
import story from './story'

function showOptions(id, root) {
    // Get part
    let part = story.findPart(id)
    root.classList.add('part-list')

    // Show leaf if part is leaf
    if (part.id === '~') {
        let node = document.createElement('li')
        node.classList.add('unwritten')
        node.innerText = 'Unwritten...'
        root.appendChild(node)
        return
    }

    // Show ending if part is an ending
    if (part.theend) {
        let node = document.createElement('li')
        node.classList.add('ending')
        node.innerText = part.ending.toUpperCase()
        root.appendChild(node)
        return
    }

    // Create option list
    for (let option of part.options) {
        let node = document.createElement('li')
        node.classList.add('option')
        node.innerText = option.text
        let sublist = document.createElement('ul')
        showOptions(option.id, sublist)
        node.appendChild(sublist)
        root.appendChild(node)
    }
}

let root = document.getElementById('paths')
showOptions('$', root)