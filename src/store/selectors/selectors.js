import { createSelector } from "@reduxjs/toolkit";

const getCountState = state => state.counter;
export const getCount = createSelector(
    getCountState,
    ( countState ) => countState.value
)
