import { configureStore } from '@reduxjs/toolkit'
import userSlice from './components/features/UserSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch