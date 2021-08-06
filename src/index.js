import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import App from './App';
import "./CssWebsite/css/style.css"
import "./CssWebsite/css/slicknav.min.css";
import "./CssWebsite/css/magnific-popup.css"
// import "./CssWebsite/css/owl.carousel.min.css"
import "./CssWebsite/css/nice-select.css"
import "./CssWebsite/css/font-awesome.min.css"

import ReactMixitup from 'react-mixitup'

import reportWebVitals from './reportWebVitals';

// import 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

{/* <link href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap" rel="stylesheet">;
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" */}
// const myName = <span>ha manh hung</span>

{/* <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Amatic+SC:400,700&display=swap"
/>;
<link
  // rel="stylesheet" crossorigin="anonymous"
  href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
/> */}



ReactDOM.render(



  <App />,



  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
