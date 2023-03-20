import { configureStore } from '@reduxjs/toolkit'
import selectedItemsSlice from './selected-items-slice'

const index= configureStore({
  reducer: {
    selectedItems: selectedItemsSlice.reducer
  }
})

export default index
