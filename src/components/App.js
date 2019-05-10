import React, { useState } from 'react';

const App = () => {

    const [resource, setResource] = useState('posts')

    return (
        <div className="ui container">
            <div className="content">
                <button
                    className="ui button primary"
                    onClick={() => setResource('posts')}
                >
                    POSTs
                    </button>
                <button
                    onClick={() => setResource('todos')}
                    className="ui button"
                >
                    TODOs
                    </button>
            </div>
            {resource}
        </div>
    );
}

export default App;