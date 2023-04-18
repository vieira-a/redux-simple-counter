/** Importa hooks utilizados para disparar as ações e selecionar o estado específico da store */
import { useDispatch, useSelector } from "react-redux";
/** Importa os reducers (funções que irão mudar o estado) */
import { increment, decrement } from "../store/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
