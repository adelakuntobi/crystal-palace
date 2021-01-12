import React from 'react';
import './App.scss';
import GlobalStyle from './GlobalStyle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Route, Switch } from 'react-router-dom';
import DefaultLanding from './pages/DefaultLanding';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';

AOS.init({
  offset: 200,
  duration: 1500,
  delay: 500,
});
function App() {
  return (
    <div className="App ">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={DefaultLanding} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot-password" component={Forgotpassword} />
      </Switch>
    </div>
  );
}

export default App;
