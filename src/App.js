import React from 'react';
import Header from './Component/Header';
import Date from './Component/Date';
import Blog1 from './Component/Blog1'
import Card from './Component/Card'
import Footer from './Component/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Date />
      <Blog1 />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
