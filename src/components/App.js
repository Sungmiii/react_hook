import React, { useState } from 'react';

import ResourceList from './ResourceList'
const App = () => {

    const [resource, setResource] = useState('posts')
    console.log('app redering')
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
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;