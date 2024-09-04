import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { isAuthenticated } = useSelector((state) => state.user)

  return (
    <div className="bg-slate-800 flex justify-between items-center mx-auto px-4 text-white h-20">
      <h1 className="font-bold text-2xl">Logo</h1>
      <ul className="hidden md:flex gap-4">
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/signin">Signin</Link>
        </li>
        {isAuthenticated ? (
          <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-[10%] w-[60%] h-full bg-neutral-950 ease-in-out duration-500"
            : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/home">Home</Link>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <Link to="/signin">Signin</Link>
        </li>
        {isAuthenticated ? (
          <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
            <Link to="/logout">Logout</Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  )
}

export default Navbar
