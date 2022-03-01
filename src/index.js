import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {Accordion} from "./Accordion";
import {Counter} from "./Counter";
import {MoviesList} from "./movies/MovieLists";
import {MovieDetail} from "./movies/MovieDetail";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="accordion" element={<Accordion/>}/>
                    <Route path="counter" element={<Counter/>}/>
                    <Route path="movies-list" element={<MoviesList/>}/>
                    <Route path="movie/:id" element={<MovieDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
