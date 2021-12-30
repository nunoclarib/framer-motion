import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './app/App';

//import { createStore } from "redux";
//import { Provider } from "react-redux";

//import counterReducer from './ex3/reducers/counterReducer';

// const store = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    // <Provider store={store}>
    <Router>
      <Routes>
        // definir nav
        <Route path='/' element={<App />} />
      </Routes>
    </Router>
    // </Provider>
    ,document.getElementById('root')
);
