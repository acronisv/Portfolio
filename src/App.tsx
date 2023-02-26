import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Skills} from "./components/Skills/Skills";
import {Greeting} from "./components/Greeting/Greeting";
import {Remote} from "./components/Remote/Remote";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Greeting/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
