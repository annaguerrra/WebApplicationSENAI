import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* linha 01 */}
      <div className='flex justify-between items-center mb-20'>
        <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-center gap-14'>
          <div className='w-13 h-13 bg-yellow-400 '></div>
          <div className='w-13 h-13 bg-yellow-400 '></div>
        </div>

        <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
          <div className='w-13 h-13 bg-yellow-400'></div>
        </div>

        <div className='w-40 h-40 bg-blue-500 flex justify-between'>
          <div className='w-13 h-13 bg-yellow-400 '></div>
          <div className='w-13 h-13 bg-yellow-400 self-end'></div>
        </div>
        
        <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
          <div className='w-13 h-13 bg-yellow-400 self-end'></div>
        </div>
      </div>

      {/* linha 02 */}
      <div className='flex justify-between items-center mb-20'>
        <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
          <div className='w-13 h-13 bg-yellow-400 self-start'></div>
        </div>

        <div className="w-40 h-40 bg-blue-500 flex flex-col justify-between items-center">
          <div className="w-13 h-13 bg-yellow-400"></div>
          
          <div className="flex justify-between gap-14">
            <div className="w-13 h-13 bg-yellow-400 flex"></div>
            <div className="w-13 h-13 bg-yellow-400 "></div>
          </div>

          <div className="w-13 h-13 bg-yellow-400"></div>
        </div>

        <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-between '>
            <div className="w-13 h-13 bg-yellow-400 mt-3"></div>
        </div>
      </div>

      {/* linha 03 */}
      <div className='flex justify-between items-center mb-20'>
        <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-between'>
          <div className='w-13 h-13 bg-yellow-400 self-end'></div>
          <div className='w-13 h-13 bg-yellow-400 self-start'></div>
        </div>

        <div className='w-40 h-40 bg-blue-500 flex items-center justify-center'>
          <div className='w-13 h-13 bg-yellow-400'></div>
        </div>

        <div className='w-40 h-40 bg-blue-500 flex flex-col items-center justify-between'>
        <div className='w-13 h-13 bg-yellow-400 self-end'></div>
        </div>

      </div>

    </>
  )
}

export default App