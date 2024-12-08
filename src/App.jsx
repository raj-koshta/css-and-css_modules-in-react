import React from 'react'
import Card from './components/Card'
import seriesData from './api/seriesData.json'

const App = () => {
  return (
    <ul style={{display: "grid",gridTemplateColumns: "auto auto auto auto"}}>
      {seriesData.map((item)=>{
        return <Card data={item} key={item.id} />
      })}
    </ul>
  )
}

export default App
