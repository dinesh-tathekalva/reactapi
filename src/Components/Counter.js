import React, {useState} from 'react';

const Counter = () => {
    const initialCount = 0; 
    const [count, setCount] = useState(initialCount)

    return (
        <div> 
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;


// you can have multiple names exports in a file and while importing you should use the same name to import thats used to export.
// But there can only be one default export in a file and it can imported with any name and it can be used with the imported name. This
// The named exports are within the curly braces like we are destructuring them where the default exports are not in the curly braces.