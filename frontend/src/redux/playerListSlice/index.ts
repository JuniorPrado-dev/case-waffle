import { createSlice } from '@reduxjs/toolkit'
const initialValue: TypePlayerData[] = [{
  id: "",
  last_check_date: Date.now(),
  scores: 1,
  email: "",
}]
const playerListSlice = createSlice({
  name: 'playerList',
  initialState: {
    value: initialValue
  },
  reducers: {
    setPlayerList: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlayerList } = playerListSlice.actions

export default playerListSlice.reducer