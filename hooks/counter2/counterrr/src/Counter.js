// src/Counter.js
import React, { useState } from 'react';

function Counter({ id, removeCounter }) {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>Counter {id}</h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <br />
            <button onClick={() => removeCounter(id)}>Remove Counter</button>
        </div>
    );
}

export default Counter;
