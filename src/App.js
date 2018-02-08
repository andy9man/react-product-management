import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import ProductList from './views/ProductList';
import ProductEdit from './views/ProductEdit';
import ProductAdd from './views/ProductAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="margin-vert-large margin-horiz-large">
          <h1>PPM - Project Product Management</h1>
          <Nav />
        </header>

        <div className="margin-horiz-large card">
          <div className="row">

            <div className="margin-horiz-xlarge small-12 medium-10 medium-centered columns">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={ProductList} />
                <Route path='/products/edit/:id' component={ProductEdit} />
                <Route path='/products/new' component={ProductAdd} />
                
                {/* <Route path='/sell' component={Sell} />
                <Route path='/ledger' component={Ledger} />
                <Route path='/transaction' component={Transaction} /> */}
              </Switch>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
