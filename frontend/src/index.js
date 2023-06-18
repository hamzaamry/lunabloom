import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './store';
import { Provider } from "react-redux";

import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <React.StrictMode>
    <ToastContainer />
      <App />
    </React.StrictMode>
  </Provider>
);

