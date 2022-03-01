import './App.css';
import {Link, Outlet} from "react-router-dom";

function Nav() {
    return (<div className="App">
        <header className="App-header">
            <h1>React Examples</h1>
            <h5>Author: Joseph Dubon</h5>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link className='App-link' to="/">Home</Link> |{" "}
                <Link className='App-link' to="/accordion">Accordion</Link> |{" "}
                <Link className='App-link' to="/counter">Counter</Link> |{" "}
                <Link className='App-link' to="/movies-list">Movies List (API)</Link>
            </nav>
            <Outlet/>
        </header>
    </div>)
}

export default Nav
