import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../features/userSlice"
import Navbar from "../components/Navbar"
import { Navigate } from "react-router-dom"

const SignUp = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.user)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      dispatch(signup({ username, password }))
      alert("Signup successful!")
      setUsername("")
      setPassword("")
    } else {
      alert("Please fill in all fields")
    }
  }

  return (
    <>
      <Navbar />
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div>
          <div className=" bg-orange-500 mt-5 rounded-xl py-10 px-4 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col gap-8 p-10 bg-orange-400 w-[400px]"
            >
              <h1 className="text-2xl">signup </h1>
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
                SignUp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUp
