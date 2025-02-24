import { createSlice } from '@reduxjs/toolkit'
const initialValue: TypeUser[] = [{
  id: "",
  name: "",
  email:"",
  role: "",
}]
const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    value: initialValue
  },
  reducers: {
    setUserList: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserList } = userListSlice.actions

export default userListSlice.reducer