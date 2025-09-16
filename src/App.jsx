import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import agregarTarea from './components/molecules/agregarTarea'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>HOLA</h1>
      <agregarTarea />
    </>
  )
}

export default App
