import React from "react"
import Navbar from "../components/Navbar"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.user)
  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <div className="text-2xl ">
          <h1>welcome to Dashboard home</h1>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}

export default Home
