import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux with React and Javascript</h1>
      </div>
      <Counter />
    </Provider>
  );
}

export default App;
