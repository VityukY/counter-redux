import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as store from './redux/store';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store.store}>
         <PersistGate loading={null} persistor={store.persistor}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root'),
);
