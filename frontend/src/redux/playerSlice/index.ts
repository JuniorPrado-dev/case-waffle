import { removeCookie } from '@/services/cookies'
import { createSlice } from '@reduxjs/toolkit'

const player: TypePlayerData = {
  email:"",
  id:"",
  last_check_date: Date.now(),
  scores:1,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: player,
  },
  reducers: {
    setPlayer: (state, action) => {
      state.value = action.payload
    },
    logoutPlayer: (state) => {
      try {
        state.value = player
        // (async () => { await tokenCache.saveToken('token', '') })()
        removeCookie("token")
      } catch (e) {
        console.log("ERROR_LOGOUT", e)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlayer, logoutPlayer } = playerSlice.actions

export default playerSlice.reducer