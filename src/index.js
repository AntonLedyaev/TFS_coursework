import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux/store/store"
import "react-datepicker/dist/react-datepicker.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  // <App/>,
  document.getElementById('root')
);


