import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './React-Final-Project/Redux/index'
import { Provider } from 'react-redux';


let store = configureStore({reducer:reducer, devTools : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
  <Provider store={store}>
    <App/>
   </Provider>
  </React.StrictMode>
 
);

reportWebVitals();
