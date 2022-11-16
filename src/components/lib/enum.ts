export enum FilterAction {
  FILTER_ALL = 'All',
  FILTER_ACTIVE = 'Active',
  FILTER_COMPLETED = 'Completed',
}

export enum ACTION {
  SET_LOADING = 'SET_LOADING',
  GET_TODOS = 'GET_TODOS',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  EDIT_TODO = 'EDIT_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  FILTER_TODO = 'FILTER_TODO',
}

export enum Status {
  WARNING = 'WARNING',
  ACTION = 'ACTION',
  DUEDATE = 'OVER TIME',
}

export enum FontWeight {
  Light = 'light',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold',
}
