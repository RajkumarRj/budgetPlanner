import { useState } from 'react'

import './App.css'
import Header from './component/plannerHeader'
import Expense from './component/expense'

function App() {

  const [budget , setBudget] = useState(2000);
  const [spent , setspent] = useState(0);

  const remaining = budget -spent;


  return (
    <>
    <div className='main'>
    <Header budget={budget} remaining={remaining} spent={spent} setBudget={setBudget} />

    <Expense budget={budget} spent={spent} setspent={setspent} />

    </div>
    
    </>
  )
}

export default App
