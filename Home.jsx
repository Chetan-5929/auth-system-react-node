import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:300/auth/home', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      console.log(response)
    }

    fetchUser()
  }, [])

  return (
    <div className="text-3xl text-blue-500">Home</div>
  )
}

export default Home
