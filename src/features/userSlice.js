import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
  user: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.user = action.payload
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    login: (state, action) => {
      const { username, password } = action.payload
      const storedUser = JSON.parse(localStorage.getItem("user"))

      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        state.isAuthenticated = true
        state.user = storedUser
      } else {
        alert("Invalid credentials")
      }
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem("user")
    },
  },
})

export const { signup, login, logout } = userSlice.actions
export default userSlice.reducer
