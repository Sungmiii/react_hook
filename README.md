## useState and useEffect :bowtie:


### useState : state, setState
```
const [currentValue, setCurrentValue] = useState(initialValue); 
```

1. currentValue => this.state.resource 
2. setCurrentValue => this.setState({resource:'update'}) 
3. initialValue => state={resource:'update'} 

### useEffect : life cycle method(componenetDidMount,...)

```
useEffect(()=>{},[value])
```

1. value is not changed? => arrow function not called 
2. value is changed? => arrow function called : componentDidUpdate 
