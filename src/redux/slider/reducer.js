import {createSlice} from "@reduxjs/toolkit";

const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        dataToSlider: [],
    },
    reducers: {
        setDataToSlider: (state, action) => {
            state.dataToSlider.push(action.payload)

        },


    },
})
export const { setDataToSlider } = sliderSlice.actions
export default sliderSlice.reducer