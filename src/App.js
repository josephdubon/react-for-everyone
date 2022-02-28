import './App.css';
import PropTypes from 'prop-types';

import {Counter} from "./Counter";

function App() {
    return (<div className="App">
        <header className="App-header">
            <Counter/>
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
