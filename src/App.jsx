import { useState } from "react"
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"
import PrivateRoutes from "./components/PrivateRoutes"
import Dashboard from "./pages/Dashboard"

function App() {
  const [count, setCount] = useState(0)
  const { isAuthenticated } = useSelector((state) => state.user)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/logout" element={<PrivateRoutes />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  )
}

export default App
