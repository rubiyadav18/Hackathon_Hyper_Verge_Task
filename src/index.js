// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from './componets/Home'
import Login from './componets/Login';
// import SignUp from './componets/Sign_up';
import Register from './componets/registration';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

ReactDOM.render(
  
  <Router>
          <div className="App">
          <Routes>
        <Route exact path="/registration" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        {/* <Route exact path="/" element={<App/>}/> */}



        <Route exact path="/" element={ <Home/>}/>



        </Routes>
        </div>
         </Router>,
  document.getElementById('root')
);
