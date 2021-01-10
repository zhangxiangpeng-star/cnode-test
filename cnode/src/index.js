import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"            //redux需要加强
import {Provider} from "react-redux"
import reducer from "./reducers/index"
const store=createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>    {/* 根组件 */}
    <App />
    </Provider>
  </BrowserRouter>
 , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
