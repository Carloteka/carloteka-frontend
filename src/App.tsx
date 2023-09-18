import React from 'react'
import { Header } from './components/header';
import { Greeting } from './components/greeting';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Footer/>
    </div>
  )
}

export default App
