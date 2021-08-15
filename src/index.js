import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

import data from './testData';

ReactDom.render(
    <App contests={data.contests}/>,
    document.getElementById('root')
);

