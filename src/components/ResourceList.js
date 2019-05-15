import React from 'react';

class ResourceList extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.resource}</h3>
            </div>
        )
    }
}

export default ResourceList;