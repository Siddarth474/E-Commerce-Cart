import { useState } from 'react'
import './App.css'
import Cart from './components/cart'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-gradient-to-br from-purple-900 via-black 
    to-purple-700 flex justify-center items-center'>
      <div className='w-[400px] h-max p-4 border border-purple-600 text-white rounded-lg'>
        <h1 className='text-3xl font-bold text-center'>Cart</h1>
        <Cart />
      </div>
    </div>
  )
}

export default App
