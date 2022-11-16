import React, { createContext, useContext, useReducer } from 'react';
import { IContextModel } from '../components/lib/interface';
import reducer, { initialState } from '../components/lib/reducer';

interface Props {
  children: React.ReactNode
}
export const TodoContext = createContext<IContextModel | null>(null);

export const TodoProvider = (props: Props): JSX.Element => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodoState = (): IContextModel => {
  const context = useContext(TodoContext);

  return context as IContextModel;
};
