import React from 'react';
import { Header, Footer }  from './components/common/';
import './App.scss';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {


  return (
    <div className="App">
      <Header />
      <br />
      <br />
      <br />
      <br />

      <Button className='button'> This is a button </Button>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
