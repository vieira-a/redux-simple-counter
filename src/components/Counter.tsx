/** Importa hooks utilizados para disparar as ações e selecionar o estado específico da store */
import { useDispatch, useSelector } from "react-redux";
/** Importa os reducers (funções que irão mudar o estado) */
import { increment, decrement } from "../store/counterSlice";
import { RootState } from "../store";
import React from "react";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
