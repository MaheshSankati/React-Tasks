import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Main from './fakeapi1.jsx';
// import Main from './fakeapi.jsx';
// import Notification from './Notification.jsx';
// import Circles from './Circles.jsx'
import Display from './ReactAssigments/index';
// import Mainn from './project';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main /> */}
    {/* <Main/> */}
    {/* <Circles/> */}
    {/* <Mainn /> */}

    <Display/>

  </React.StrictMode>
  // <ProfileCard name="Mahesh" city="Hyd"> <ProfileCard/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
