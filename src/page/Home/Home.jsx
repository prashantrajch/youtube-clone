import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Feed from '../../components/Feed/Feed'

export default function Home() {
  return (
    <div className='flex'>
      <Navbar />
      <Feed />
    </div>
  )
}
