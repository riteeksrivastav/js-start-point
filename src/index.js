import React from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import propTypes from 'prop-types';

const Header = ({message}) => {
    return (
        <h2 className = "Header text-center">
            {message}
        </h2>
    )
}

Header.propType = {
    message: propTypes.string
}

Header.defaultProps = {
    message: "Hello!"
}

const App = () => {
    return (
       <div className = "App">
           <Header message = "This is the first react component with props"/>
           <div>
                ...
           </div>
       </div>
    )
}


ReactDom.render(
    <App headerMessage="This is the first react component with props"/>,
    document.getElementById('root')
)