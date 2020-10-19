import React, { useState } from 'react';

import List from './List';
import data from './data';

const App = () => {
    const [people, setPeople ] = useState(data);

    const onClearButton = () => {
        setPeople([]);
    }

    return (
        <main>
            <section className="container">
                <h2>{data.length} BirthDays Today</h2>
                <List people={people} />
                <button onClick={onClearButton} >Clear All</button>
            </section>
        </main>
    );
};

export default App;