import React from "react"
import { useState, useEffect } from "react"
import { login } from "../features/userSlice"
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      dispatch(login({ username, password }))
    } else {
      alert("Please fill in all fields")
    }
  }

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.user)

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <Navigate to="/home" />
      ) : (
        <div>
          <div className=" bg-orange-500 mt-5 rounded-xl py-10 px-4 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col gap-8 p-10 bg-orange-400 w-[400px]"
            >
              <h1 className="text-2xl">signin </h1>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="enter your name"
                className=" w-56 py-1 rounded-xl bg-slate-300 border-none outline-none p-2"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="enter your password"
                className="w-56 py-1 rounded-xl bg-slate-300 border-none outline-none p-2"
              />
              <button className=" w-56 py-1 rounded-xl bg-slate-300 hover:bg-orange-300 ">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Login
