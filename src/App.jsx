import { useState } from 'react'
import RouterApp from './router'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#F0E9D1]/75 flex flex-col h-screen w-full'>
      <RouterApp/>
    </div>
  )
}

export default App
