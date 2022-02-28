import './App.css';
import PropTypes from 'prop-types';

import {Counter} from "./Counter";
import {Accordion} from "./Accordion";

function App() {
    return (<div className="App">
        <header className="App-header">
            <p>Counter Example</p>
            <Counter/>
            <p>Accordion Example</p>
            <Accordion/>
        </header>
    </div>);
}

function HelloWorld({name, greeting = 'Hello'}) {
    return (<h1>{greeting}, {name}!</h1>)
}

HelloWorld.propTypes = {
    name: PropTypes.string, greeting: PropTypes.string,
};

export default App;
