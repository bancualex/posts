import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './components/Post/Post';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DataProvider from './store/DataProvider';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header></Header>
        <Router>
          <Switch>
            <PrivateRoute path="/app" component={Home}/>
            <PrivateRoute path="/post/:id" component={Post}/>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
