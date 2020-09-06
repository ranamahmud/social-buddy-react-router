import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';import Home from './components/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
   <div>
      <Container maxWidth="sm">
        <Header/>
        <Home></Home>
      </Container>
   </div>

  );
}

export default App;
