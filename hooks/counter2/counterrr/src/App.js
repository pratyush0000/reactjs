// src/App.js
import React, { useState } from 'react';
import Counter from './Counter';

function App() {
    const [counters, setCounters] = useState([]);

    const addCounter = () => {
        setCounters([...counters, { id: Date.now() }]);
    };

    const removeCounter = (id) => {
        setCounters(counters.filter(counter => counter.id !== id));
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Multi-Counter Application</h1>
            <button onClick={addCounter}>Add Counter</button>
            <div>
                {counters.map(counter => (
                    <Counter key={counter.id} id={counter.id} removeCounter={removeCounter} />
                ))}
            </div>
        </div>
    );
}

export default App;
