import React, {Component} from 'react';
import Header from './components/Header';
import BodyLeft from './components/BodyLeft';
import BodyRight from './components/BodyRight';
import './style.css'


const App = () => (
<div className="App">
    <Header/>
    <BodyLeft/>
    <BodyRight/>
    </div>
  );


export default App;
