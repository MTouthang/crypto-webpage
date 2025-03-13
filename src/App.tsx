import { BrowserRouter } from 'react-router'
import './App.css'
import { CurrencyContext } from './context/CurrencyContext'

import { useState } from 'react'
import Routing from './components/Routing/Routing'
function App() {
  const [currency, setCurrency] = useState<string>('usd')

  return (
    <>
      <BrowserRouter>
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
          <Routing />
        </CurrencyContext.Provider>

      </BrowserRouter>

    </>
  )
}

export default App
