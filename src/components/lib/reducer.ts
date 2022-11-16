import { ACTION, FilterAction } from './enum';
import { ITodo, ITodoState, TypeActions } from './interface';

export const initialState: ITodoState = {
  todos: [],
  isLoading: true,
  filter: FilterAction.FILTER_ALL
};

const reducer = (state = initialState, action: TypeActions): ITodoState => {
  switch (action.type) {
    case ACTION.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload as boolean
      };
    }
    case ACTION.GET_TODOS:
      return {
        ...state,
        todos: action.payload as ITodo[]
      };
    case ACTION.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload as ITodo]
      };
    case ACTION.DELETE_TODO: {
      const todoList = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: todoList
      };
    }
    case ACTION.TOGGLE_TODO: {
      const payload = action.payload as ITodo;
      const newTodo = state.todos.map((todo) => {
        return todo.id === payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      });
      return {
        ...state,
        todos: newTodo
      };
    }
    case ACTION.FILTER_TODO: {
      return {
        ...state,
        filter: action.payload as string
      };
    }

    default:
      return state;
  }
};
export default reducer;
