import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'

ReactDom.render(
    <App headerMessage="This is the first react component with props"/>,
    document.getElementById('root')
);

