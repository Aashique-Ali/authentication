import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import Logout from "../pages/Logout"

const PrivateRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.user)
  return isAuthenticated ? <Logout /> : <Navigate to="/" />
}
export default PrivateRoutes
