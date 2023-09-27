import React, { useEffect, useState } from 'react'
import { fetchCategory } from './components/api'
import { Header } from './components/header'
import { Greeting } from './components/greeting'
import { CategoryCard } from './components/category-card/CategoryCard'
import { Footer } from './components/footer'

type Data = {
  name: string 
  description: string
  image: string
  id: number
}

function App() {
  const [category, setCategory] = useState<Data[]>([])

  const getData = async () => {
    const data = await fetchCategory()
    console.log(data)
    setCategory(data)
  }
  console.log(category)
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <Header />
      <Greeting />
      {category.map((info, i) => { console.log(info.image); console.log(info);
        return <CategoryCard order={i + 2 % 2} key={info.id} title={info.name} description={info.description} image={info.image}/>
      })}

      <Footer />
    </div>
  )
}

export default App
