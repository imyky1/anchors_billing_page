import { useState } from 'react'
import Billing from './pages/billing_page'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Billing />
    </>
  )
}

export default App
