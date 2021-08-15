import React from 'react'
import ReactDom from 'react-dom'

const color = Math.random() > 0.5 ? 'green' : 'blue'

const App = () => {
    return (
        <h2 className = 'text-center'>
            This is the first react component
        </h2>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
)