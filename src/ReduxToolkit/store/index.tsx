import {configureStore} from '@reduxjs/toolkit'
import todoSlice from '../Slices/todoslice'

const Store= configureStore({
   reducer:{
       todos:todoSlice,
   },
})

export default Store;