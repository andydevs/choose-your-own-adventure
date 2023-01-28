/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
import './style/paths.scss'
import go from 'gojs'
import story from './story'

const pathsDiagram = new go.Diagram("paths-diagram", {
    isReadOnly: true
})

pathsDiagram.nodeTemplate = 
    new go.Node("Auto")
        .add(new go.Shape({ 
                figure: 'RoundedRectangle',
                stroke: null
            })
            .bind("fill", "color"))
        .add(new go.TextBlock("Sample Text", { 
                margin: 6, 
                stroke: "black", 
                font: "12px Verdana" 
            })
            .bind('text', 'text'));

pathsDiagram.linkTemplate = 
    new go.Link({
        routing: go.Link.Orthogonal,
        corner: 5
    })
    .add(new go.Shape({ strokeWidth: 1, stroke: '#777' }))

pathsDiagram.layout = new go.TreeLayout({
    angle: 0,
    nodeSpacing: 10,
    layerSpacing: 30
})

let colors = [
    'aqua',
    'lime',
    '#ffdd00',
    'lightsalmon',
    'violet'
]
let nodes = []
for (const part of story.parts) {
    if (part.theend) {
        nodes.push({
            key: `${part.id}-end`,
            parent: part.id,
            text: part.ending,
            color: 'transparent'
        })
    } else {
        for (const index in part.options) {
            let option = part.options[index]
            nodes.push({
                key: option.id,
                parent: part.id,
                text: option.text,
                color: colors[index]
            })
        }
    }
}

pathsDiagram.model = new go.TreeModel([
    { key: "$", parent: '', text: "Start", color: "#aaa"},
    ...nodes
])