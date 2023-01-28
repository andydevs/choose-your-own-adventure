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
            .bind('text')
            .bind('font'));

pathsDiagram.linkTemplate = 
    new go.Link({
        routing: go.Link.Orthogonal,
        corner: 5
    })
        .add(new go.Shape({ 
            strokeWidth: 1, 
            stroke: '#777'
        }))
        .add(new go.Shape({
            toArrow: 'Triangle',
            fill: '#777',
            stroke: null
        }))

pathsDiagram.layout = new go.LayeredDigraphLayout({
    direction: 90
})

let colors = [
    'aqua',
    'lime',
    '#ffdd00',
    'lightsalmon',
    'violet'
]
let unique = (key='key') => (arr, val) => arr.some(elem => elem[key] === val[key]) ? arr : [...arr, val]
let choices = story.parts
    .flatMap(part => 
        part.theend 
            ? [({ 
                key: `${part.id}-end`,
                text: part.ending,
                color: 'transparent',
                font: 'bold 12px Verdana'
            })]
            : part.options.map((opt, index) => ({ 
                key: opt.id, 
                text: opt.text,
                color: colors[index] 
            }))
    )
    .reduce(unique(), [])
choices.unshift({ 
    key: '$',
    text: 'Start',
    color: '#aaa'
})
let links = story.parts
    .flatMap(part => 
        part.theend
            ? [({
                from: part.id,
                to: `${part.id}-end`
            })]
            : part.options.map(opt => ({ 
                from: part.id, 
                to: opt.id 
            }))
    )

pathsDiagram.model = new go.GraphLinksModel(choices, links)