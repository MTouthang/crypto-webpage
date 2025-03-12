import './App.css'
import { CurrencyContext } from './context/CurrencyContext'
import Home from './pages/Home'
import { useState } from 'react'
function App() {
  const [currency, setCurrency] = useState<string>('usd')

  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
      </CurrencyContext.Provider>

    </>
  )
}

export default App
