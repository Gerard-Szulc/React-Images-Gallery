import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {DatabaseProvider} from "./contexts/databaseContext/DatabaseContext";
import {UserProvider} from "./contexts/users/Users";


ReactDOM.render(
  <UserProvider>
  <DatabaseProvider>
  <App />
  </DatabaseProvider>
  </UserProvider>
  , document.getElementById('root'));
registerServiceWorker();
