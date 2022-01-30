import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Remotely from './components/remotely/Remotely';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Remotely/>
        </div>
    );
}

export default App;
