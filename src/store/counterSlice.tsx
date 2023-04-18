/** Cria um conjunto de reducers, actions e um estado inicial */
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
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
