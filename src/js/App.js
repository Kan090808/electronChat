import React from 'react';
import HomeView from './views/Home';
import TestView from './views/test'

import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link,
    Router
} from 'react-router-dom'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";

export default function App(){
    return (
        <div>
            <HomeView />
            {/* <BrowserRouter>
                <Link to='/'>home</Link>
                <Switch>
                    <Route path='/' element={<HomeView />} />
                    <Route path='/test' element={<TestView />} />
                </Switch>
            </BrowserRouter> */}
        </div>
    )
}