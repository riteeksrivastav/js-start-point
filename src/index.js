import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const color = Math.random() > 0.5 ? 'green' : 'blue'

const App = (props) => {
    return (
        <h2 className = 'text-center'>
            {props.headerMessage}
        </h2>
    )
}

App.propType = {
    headerMessage: propTypes.string
}

App.defaultProps = {
    headerMessage: "Hello!"
}

ReactDom.render(
    <App headerMessage="This is the first react component with props"/>,
    document.getElementById('root')
)