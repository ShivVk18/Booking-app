import {configureStore} from '@reduxjs/toolkit'
import slicesReducer from './slices/userSlice'



const store = configureStore({
    reducer:slicesReducer
})

export default store