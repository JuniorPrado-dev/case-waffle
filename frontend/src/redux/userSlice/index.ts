import { removeCookie } from '@/services/cookies'
import { createSlice } from '@reduxjs/toolkit'

const user: TypeUser = {
  id: "",
  name: "",
  email:"",
  role:""
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: user,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
    },
    logoutUser: (state) => {
      try {
        state.value = user
        // (async () => { await tokenCache.saveToken('token', '') })()
        removeCookie("token")
      } catch (e) {
        console.log("ERROR_LOGOUT", e)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = userSlice.actions

export default userSlice.reducer