import { createSlice } from "@reduxjs/toolkit";


const metricsSlice = createSlice({
    name: 'metrics',
    initialState: {
        reRenders: 0,
        apiSpeed: 0,
        memoryUsage: 0,
        isSimulating: false,
    },
    reducers: {
        updateMetrics: (state, action) => {
            state.reRenders = action.payload.reRenders;
            state.apiSpeed = action.payload.apiSpeed;
            state.memoryUsage = action.payload.memoryUsage;
        },
        toggleSimulating: (state) => {
            state.isSimulating = !state.isSimulating;
        }
    }
})

export const { updateMetrics, toggleSimulating } = metricsSlice.actions;
export default metricsSlice.reducer;