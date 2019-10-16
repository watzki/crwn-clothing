import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage.component'

const HatsPage = (props) => {
    console.log(props);
    return (
    <div>
        <h1>Hats Page</h1>
    </div>
)
}

const HatsPageDetails = (props) => {
    console.log(props);
    return (
    <div>
        <h1>Hats Page Details</h1>
    </div>
)
}

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/shop/hats' component={HatsPage}/>
                <Route exact path='/shop/hats/:hatID' component={HatsPageDetails}/>
            </Switch>
        </div>
    );
}

export default App;
