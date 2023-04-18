/** Store: contém o estado da aplicação e provê acesso a esse estado para os componentes que precisarem dele */
import { configureStore } from "@reduxjs/toolkit";

/** Importa o reducer do createSlice. A partir daqui, os componentes terão acesso ao estado */
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

/**
 * O estado da aplicação é o counter, que a store está renomeando para counterReducer
 */

export type RootState = ReturnType<typeof store.getState>;
