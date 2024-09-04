import React from "react"
import { useDispatch } from "react-redux"
import { logout } from "../features/userSlice"
import { Navigate, useNavigate } from "react-router-dom"

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    alert("Logged out successfully!")
    navigate("/")
  }

  return (
    <div className="flex justify-center items-center w-[500px] mx-auto mt-10 p-10 rounded-xl bg-slate-800 flex-col ">
      <h1 className="text-xl text-white mb-5">are you sure you want logout</h1>
      <div className="flex justify-center items-center gap-5 ">
        <button
          onClick={handleLogout}
          className=" rounded py-2 px-10 bg-slate-400 hover:"
        >
          yes
        </button>
        <button
          onClick={() => navigate("/")}
          className="  rounded py-2 px-10 bg-slate-400"
        >
          No
        </button>
      </div>
    </div>
  )
}

export default Logout
