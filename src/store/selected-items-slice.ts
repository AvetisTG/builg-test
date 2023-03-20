import { createSlice } from '@reduxjs/toolkit'

const selectedItemsSlice= createSlice({
  name: 'selectedItems',
  initialState:{
    frameMaterial: '',
    glassType: '',
    frameColor: '',
  },
  reducers:{
    resetSelections: (state) => {
      state.frameMaterial = '';
      state.glassType = '';
      state.frameColor = '';
    },
    selectFrameMaterial: (state, action) => {
      state.frameMaterial = action.payload;
    },
    selectGlassType: (state, action) => {
      state.glassType = action.payload;
    },
    selectFrameColor: (state, action) => {
      state.frameColor = action.payload;
    },
  }
})

export default selectedItemsSlice
export const selectedItemsActions = selectedItemsSlice.actions
