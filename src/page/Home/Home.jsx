import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className='flex'>
      <Navbar />
      <div>
        <h1>Feed containe available for next day</h1>
      </div>
    </div>
  )
}
