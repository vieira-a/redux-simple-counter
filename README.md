# React Redux Toolkit

Exemplo simples de um contador

## Conceitos

> Slice: função que cria um conjunto de reducers, actions e um estado inicial

> Store: contém o estado da aplicação e provê acesso a esse estado para os componentes;

> Reducer: função que recebe o estado atual da store, uma action e retorna um novo estado;

> Action: objeto que descreve a mudança de estado na aplicação;

> Dispatch: função que envia a _action_ para _store_

## Descrição das etapas

### Exemplo com Javascript

- Estrutura de pastas

```
src/
  index.js
  App.js
  store/
    index.js
    counterSlice.js
  components/
    Counter.js
```

- Criar o slice (src/store/counterSlice.js): para definir o estado e funções que atualizam esse estado

- Configura a store (src/store/index.js): que recebe estado e o provê os demais componentes

- Cria o componente (src/components/Counter.js)

Que irá manipular o estado utilizando as funções

- Mapa mental

#### slice (actions, initial state, reducers) > store (state) > component

### Exemplo com Typescript

- counterSlice.tsx

Criada uma interface para tipar o _initialState_ e as funções _increment_ e _decrement_

- store (src/store/index.tsx)

Exportamos um type para utilizar no componente Counter: `export type RootState = ReturnType<typeof store.getState>`

- Counter.tsx

Tipamos o parâmetro state do useSelector de acordo com o type RootState exportado. Mudamos o retorno desta função de `state.counter` para `state.counter.value`; `value` de acordo com a interface.
