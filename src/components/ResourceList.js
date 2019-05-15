import React from 'react';

import axios from 'axios';

class ResourceList extends React.Component {

    state = { resources: [] };

    async componentDidMount() {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

        this.setState({ resources: res.data })

    }

    async componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

            this.setState({ resources: res.data })
        }
    }


    render() {
        return (
            <div>
                <h3>{this.state.resources.length}</h3>
            </div>
        )
    }
};

export default ResourceList;