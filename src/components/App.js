import React from 'react';
import Header from './Header';

class App extends React.Component {
    state = {
        pageHeader: 'This header is stateful and will change with the state of the app'
    }
    render() {
        return (
        <div className = "App">
            <Header message = {this.state.pageHeader} />
            <div>
                    ...
            </div>
        </div>
        );
    };
};

export default App;