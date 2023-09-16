import React from 'react'

import { Header } from './components/header'
import { Greeting } from './components/greeting'
import { CategoryCard } from './components/category-card/CategoryCard'

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <CategoryCard order={0} />
      <CategoryCard order={1} />
      <CategoryCard order={0} />
    </div>
  )
}

export default App
