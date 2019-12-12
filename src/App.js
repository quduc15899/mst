import React from 'react';

// import './App.css';
import {
  BrowserRouter as BRouter,
  Switch,
  Route,
} from "react-router-dom";

import Logout from './Component/Logout';
import CheckAtt from './Component/CheckAtt';
import Login from './Component/Login';
import Home from './Component/Home/Home';
import Header from './Component/Home/Header';
import Footer from './Component/Home/Footer';
import QRResult from './Component/Home/QRResult';


function App() {
  return (
    <BRouter>
      <Switch>
        <Route exact path="/">
          <div>
                  <Header />
                  <Home />
                  <Footer />
          </div>
          
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/qr">
          <div>
                  <Header />
                  <QRResult />
                  <Footer />
          </div>
          
        </Route>
        <Route exact path="/checkatt">
          <div>
                  <CheckAtt />
          </div>
          
        </Route>
        
      </Switch>
    </BRouter>

  );
}

export default App;
