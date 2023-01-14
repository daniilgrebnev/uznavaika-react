import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from './slider/reducer'

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
    },
})