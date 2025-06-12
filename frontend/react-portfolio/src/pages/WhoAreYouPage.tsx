import React from 'react'
import { useParams } from 'react-router-dom'

const WhoAreYouPage = () => {
  const params = useParams()
  console.log(params)
  return (
   <h1>Your name is : {params.name}</h1>
  )
}

export default WhoAreYouPage