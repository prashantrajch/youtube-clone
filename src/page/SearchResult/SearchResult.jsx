import React from 'react'
import { useParams } from 'react-router-dom'

export default function SearchResult() {
    const {search_query} = useParams()
    console.log(search_query)

  return (
    <div>
      Im search Result
    </div>
  )
}
