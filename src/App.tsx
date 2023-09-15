import React from 'react'
import { Header } from './components/header';
import { Greeting } from './components/greeting';
import { CategoryCard} from './components/category-card/CategoryCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <CategoryCard/>
    </div>
  )
}

export default App
