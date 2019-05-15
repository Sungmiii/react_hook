import React, { useState, useEffect } from 'react';

import axios from 'axios';


const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([]);

    useEffect(() => {
        (async (resource) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

            setResources(res.data)
        })(resource)
    }, [resource]);
    console.log(resources)

    return (
        <div>
            <ul>{resources.map(list => <li key={list.id}>{list.title}</li>)}</ul>
        </div>
    )
};

export default ResourceList;

// class ResourceList extends React.Component {

//     state = { resources: [] };

//     async componentDidMount() {
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

//         this.setState({ resources: res.data })

//     }

//     async componentDidUpdate(prevProps) {
//         console.log(prevProps)
//         if (prevProps.resource !== this.props.resource) {
//             const res = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`)

//             this.setState({ resources: res.data })
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <h3>{this.state.resources.length}</h3>
//             </div>
//         )
//     }
// };


