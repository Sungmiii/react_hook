import React, { useState, useEffect } from 'react';

import axios from 'axios';


const ResourceList = ({ resource }) => {

    const [resources, setResources] = useState([]);

    const fetchResoucrce = async (resource) => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(res.data)
    };
    console.log(resource)

    useEffect(() => {
        fetchResoucrce(resource)
    }, [resource]);

    return (
        <div>
            <h3>{resources.length}</h3>
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


