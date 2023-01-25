import React from 'react';
import './App.css';
import { ControlPanel } from './components/ControlPanel';

function App() {
    return (
        <div>
            <ControlPanel onChangeFeed={(feeds) => { console.log(feeds) }} />
        </div>
    );
}

export default App;
