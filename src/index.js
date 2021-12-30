import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';

import App from './app/App'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import PageButtons from './components/PageButton'

import { createStore } from "redux";
import { Provider } from "react-redux";


//import counterReducer from './ex3/reducers/counterReducer';

// const store = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    // <Provider store={store}>
    <Router>
      <Routes>
          <Route path='/page1' element={<Page1/>} />
          <Route path='/page2' element={<Page2/>} />
      </Routes>
      <PageButtons/>
    </Router>
    // </Provider>
    ,document.getElementById('root')
);