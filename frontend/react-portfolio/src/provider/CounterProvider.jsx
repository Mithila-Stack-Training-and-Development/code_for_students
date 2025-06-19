import { createContext, useContext, useState } from 'react';

export const CounterContext = createContext({
  count:0,
  setCounter: () => {}
});

const CounterProvider = (props) => {
  const [counter, setCounter] = useState(100);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  return useContext(CounterContext);
}
export default CounterProvider