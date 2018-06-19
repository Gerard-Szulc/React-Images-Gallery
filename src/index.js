import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {DatabaseProvider} from "./contexts/databaseContext/DatabaseContext";

ReactDOM.render(
  <DatabaseProvider>
  <App />
  </DatabaseProvider>
  , document.getElementById('root'));
registerServiceWorker();
