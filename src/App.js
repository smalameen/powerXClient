import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-nice-dates/build/style.css'
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import OurClasses from './Components/OurClasses/OurClasses';
import ClassDetail from './Components/ClassDetail/ClassDetail';
import IntegrationWithPay from './Components/IntegrationWithPay/IntegrationWithPay';
import axios from 'axios'
import PaymentProcess from './Components/IntegrationWithPay/PaymentProcess';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/LogIn/PrivateRoute';
import Blog from './Components/Blog/Blog';

export const dataContext = createContext()
export const UserContext = createContext()
function App() {
  const [phone, setPhone] = useState({})
  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5001/phone')
      result.data.map((number => setPhone(number)))
    }
    fetchData()
  }, [])
  

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}> 
    <dataContext.Provider value={[phone, setPhone]}>
      <Router>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route  path="/classes">
            <OurClasses/>
          </Route>
          <Route  path="/classDetails/:id">
            <ClassDetail/>
          </Route>
          <Route  path="/payment">
           <IntegrationWithPay/>
          </Route>
          <Route  path="/auth">
           <LogIn/>
          </Route>
          <PrivateRoute  path="/confirmation">
           <PaymentProcess/>
          </PrivateRoute>
          <Route  path="/blogs">
           <Blog/>
          </Route>
        </Switch>
      </Router>
      </dataContext.Provider>
      </UserContext.Provider>
  );
}

export default App;
