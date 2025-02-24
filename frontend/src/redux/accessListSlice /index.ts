import { createSlice } from '@reduxjs/toolkit'
const initialValue: TypeAccessData[] = [{
  id: "",
  created_at: Date.now(),
  id_post: "",
  status: "",
  utm_campaign: "",
  utm_channel: "",
  utm_medium: "",
  utm_source: "",
  email:"",
}]
const accessListSlice = createSlice({
  name: 'accessList',
  initialState: {
    value: initialValue
  },
  reducers: {
    setAccessList: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAccessList } = accessListSlice.actions

export default accessListSlice.reducer