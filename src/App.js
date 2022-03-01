import './App.css';
import PropTypes from 'prop-types';

import {Counter} from './Counter'
import {Accordion} from './Accordion'
import {Input} from './Input'
import {MoviesList} from "./MovieLists";

function App() {
    return (<div className="App">
        <header className="App-header">
            <p>Counter Example</p>
            <Counter/>
            <hr/>

            <p>Accordion Example</p>
            <Accordion/>
            <hr/>

            <p>Input Example</p>
            <Input/>
            <hr/>

            <p>Loop and Filter/Search Example</p>
            <MoviesList/>
            <hr/>

        </header>
    </div>)
}

function HelloWorld({name, greeting = 'Hello'}) {
    return (<h1>{greeting}, {name}!</h1>)
}

HelloWorld.propTypes = {
    name: PropTypes.string, greeting: PropTypes.string,
};

export default App
