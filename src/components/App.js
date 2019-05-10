import React from 'react';

class App extends React.Component {
    state = { resource: 'posts' }
    render() {
        return (
            <div className="ui container">
                <div className="content">
                    <button
                        className="ui button primary"
                        onClick={() => this.setState({ resource: 'posts' })}
                    >
                        POSTs
                    </button>
                    <button
                        onClick={() => this.setState({ resource: 'todos' })}
                        className="ui button"
                    >
                        TODOs
                    </button>
                </div>
                {this.state.resource}
            </div>
        )
    }
};

export default App;