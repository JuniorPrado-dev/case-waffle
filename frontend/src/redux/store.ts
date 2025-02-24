import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import userListReducer from './userListSlice'
import playerReducer from './playerSlice'
import playerListReducer from './playerListSlice'
import accessListReducer from './accessListSlice '

export const store= configureStore({
  reducer: {
    user:userReducer,
    userList:userListReducer,
    player:playerReducer,
    playerList:playerListReducer,
    accessList:accessListReducer,
    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

