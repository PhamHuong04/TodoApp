export interface ITodo {
  id: number
  content: string
  dueDate: string
  isCompleted: boolean
}
export interface ICounterState {
  todos: ITodo[]
  isLoading: boolean
  filter: string
}
export interface IContextModel {
  state: ICounterState
  dispatch: React.Dispatch<TypeActions>
}

export interface ITodoState {
  todos: ITodo[]
  isLoading: boolean
  filter: string
}

export interface IGetTodo {
  type: string
  payload: ITodo[]
}

export interface IAddTodoItem {
  type: string
  payload: ITodo
}

export interface IDeleteTodoItem {
  type: string
  payload: number
}

export interface IEditTodo {
  type: string
  payload: ITodo
}

export interface IToggleTodo {
  type: string
  payload: ITodo
}

export interface IFilterTodo {
  type: string
  payload: string
}

export interface SetLoading {
  type: string
  payload: boolean
}

export type TypeActions =
  | IGetTodo
  | IAddTodoItem
  | IDeleteTodoItem
  | IEditTodo
  | IToggleTodo
  | IFilterTodo
  | SetLoading;
