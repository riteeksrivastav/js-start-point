import React from 'react'
import ReactDom from 'react-dom'

const color = Math.random() > 0.5 ? 'green' : 'blue'

ReactDom.render(
    // React.createElement('h2', null, 'Hi this my first reactdom'),
    <h2 style={{color}} className = 'text-center'>
        Hi, this is my first React DOM
    </h2>,
    document.getElementById('root')
)