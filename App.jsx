import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() =>{
    axios.get('/app/jokes')
    .then((response) =>{
      setJokes(response.data)
    })
    .catch((error)=>{
       console.error(error)
    })
  })
  return (
    <>
    <h1>Hello there</h1>
    <p>Jokes : {jokes.length}</p>
    {
      jokes.map((joke, index) =>(
        <div key = {joke.id}>
          <p>{joke.title}</p>
          <p>{joke.content}</p>
        </div>
      ))
    }
      
    </>
  )
}

export default App
