import { createSlice } from '@reduxjs/toolkit'

const selectedItemsSlice= createSlice({
  name: 'selectedItems',
  initialState:{
    frameMaterial: '',
    glassType: '',
    frameColor: '',
  },
  reducers:{
    selectFrameMaterial: (state, action) => {
      state.frameMaterial = action.payload;
    },
    selectGlassType: (state, action) => {
      state.glassType = action.payload;
    },
    selectFrameColor: (state, action) => {
      state.frameColor = action.payload;
    },
    resetSelections: (state) => {
      state.frameMaterial = '';
      state.glassType = '';
      state.frameColor = '';
    },
  }
})

export default selectedItemsSlice
export const selectedItemsActions = selectedItemsSlice.actions
