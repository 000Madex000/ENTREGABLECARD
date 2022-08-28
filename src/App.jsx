import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Quotebox from './componentes/QuoteBox'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const title = 'frase del dia'
  return (
    <div className="App" >
      <div className='boxPhrase'>
        <Quotebox titlePhrase ={title} />
      </div>
      
    </div>
  )
}

export default App
