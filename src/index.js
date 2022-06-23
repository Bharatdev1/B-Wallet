import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Adding store 
import store from './Store/Store';
// now provider 
import {Provider} from 'react-redux';

// Language
import EData from './Language/English.json'
import SData from './Language/Spanish.json'
import IData from './Language/Italian.json'
import GData from './Language/German.json'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
        resources: {
      EN: {
        translation:EData
      },
      ES: {
        translation:SData
      },
      IT: {
        translation:IData
      },
      DE: {
        translation:GData
      }
    },
    lng:"EN", // if you're using a language detector, do not define the lng option
    fallbackLng:"EN",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

// german DE

store.subscribe(()=>{
  const data=store.getState( )
  console.log(data.ChangeLenguage.change)})
ReactDOM.render(
  <React.StrictMode>
    {/* Providing Data to application
     Centrilized data
     */}
 
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
