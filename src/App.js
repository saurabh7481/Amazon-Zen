import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/NavBar/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Auth/Login';
import {useStateValue} from './context/StateProvider';
import {auth} from './firebase';
import * as actionTypes from './context/actionTypes';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null
        });
      }
    })
    
    return () => {
      unsubscribe();
    }
  }, [])

  console.log(user);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;