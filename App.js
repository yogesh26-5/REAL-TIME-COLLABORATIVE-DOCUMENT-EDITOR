import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import Editor from './components/Editor';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
                <Route path="/documents/:id" element={<Editor />} />
            </Routes>
        </Router>
    );
}

export default App;
