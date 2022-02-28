import './App.css';
import PropTypes from 'prop-types';

function App() {
    return (<div className="App">
        <header className="App-header">
            <HelloWorld name={'Joe'}/>
            <HelloWorld name={'World'}/>
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
