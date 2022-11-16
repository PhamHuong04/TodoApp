import { ACTION } from './enum';
import { IAddTodoItem, IDeleteTodoItem, IEditTodo, IFilterTodo, IGetTodo, ITodo, IToggleTodo, SetLoading } from './interface';

export const getTodoSuccess = (todos: ITodo[]): IGetTodo => {
  return {
    type: ACTION.GET_TODOS,
    payload: todos
  };
};

export const addTodoSuccess = (todo: ITodo): IAddTodoItem => {
  return {
    type: ACTION.ADD_TODO,
    payload: todo
  };
};

export const deleteTodoItem = (id: number): IDeleteTodoItem => {
  return {
    type: ACTION.DELETE_TODO,
    payload: id
  };
};

export const editTodoItem = (todo: ITodo): IEditTodo => {
  return {
    type: ACTION.EDIT_TODO,
    payload: todo
  };
};

export const setLoading = (isLoading: boolean): SetLoading => {
  return {
    type: ACTION.SET_LOADING,
    payload: isLoading
  };
};

export const toggleTodoItem = (todo: ITodo): IToggleTodo => {
  return {
    type: ACTION.TOGGLE_TODO,
    payload: todo
  };
};

export const filterTodo = (filter: string): IFilterTodo => {
  return {
    type: ACTION.FILTER_TODO,
    payload: filter
  };
};
