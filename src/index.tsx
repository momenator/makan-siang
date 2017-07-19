import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Orders from './components/Orders';
import Order from './components/Order';
import User from './components/User';
import Login from './components/Login';
import Manage from './components/Manage';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/orders" component={Orders} />
      <Route path="/order/:orderName" component={Order} />
      <Route path="/user/:user" component={User} />
      <Route path="/login" component={Login} />
      <Route path="/manage" component={Manage} />
    </div>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
