import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import { store } from './features/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App/>}/>
      </Routes>
      </Provider>
    </Router>
  </React.StrictMode>
);
