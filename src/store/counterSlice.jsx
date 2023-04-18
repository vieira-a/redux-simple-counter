/** Cria um conjunto de reducers, actions e um estado inicial */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

/**
 * Action: counter (o nome que descreve a mudança do estado)
 * Initial state: 0, (estado inicial)
 * Reducers: increment, decrement (funções que mudam o estado)
 *
 */

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
