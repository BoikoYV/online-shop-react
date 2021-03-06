import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../components/Header/Header';
import Cart from '../pages/Cart/Cart';
import Cards from '../pages/Catalog';
import Favourites from '../pages/Favourites/Favourites';
import Error from '../components/Error/Error';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Cards} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/favourites" component={Favourites} />
                    <Route path="/*" component={Error} />
                </Switch>

            </main>
        </>
    );
};



export default App;