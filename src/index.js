import React from 'react';
import ReactDOM from 'react-dom';
// /import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
 //import User from './User';
// import Inputbox from './Inputbox'
//import Parent from './Parent';
//import Hook from './Hooks'
//import Effectprops from './EffectProps'
// import DocTitleOne from './DocTitleOne'
// import DocTitleTwo from './DocTitleTwo'
// import CounterOne from './CounterOne';
// import Hoc from './Hoc';
// import DynamicRouting from './DynamicRouting';
import reportWebVitals from './reportWebVitals';
// import FetchData from './PrefilledFormData';
// import Todo from './ToDo_App'
// import PostApi from './PostApi'
// import Inputbox from  './Inputbox'
import Todo from './ToDo_App'
// import  FetchData from './DeleteData_API'

ReactDOM.render(
  <React.StrictMode>
      {/* <FetchData /> */}
        {/* <Todo/> */}
      {/* <Inputbox /> */}
      {/* <Hoc/> */}
      {/* <PostApi/> */}
      <Todo/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
