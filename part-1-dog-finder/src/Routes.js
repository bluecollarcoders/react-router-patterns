import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetail from './FilterDogDetail';

function Routes ({dogs}) {
    return (
        <Switch>
        <Route exact path='/dogs'>
            <DogList dogs={dogs} />
        </Route>
        <Route path='/dogs/:name'>
            <FilterDogDetail dogs={dogs} />
            <Redirect to='/dogs'/>
        </Route>
        </Switch>
    );
}

export default Routes