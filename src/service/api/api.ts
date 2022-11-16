import { ITodo } from '../../components/lib/interface';
import API from '../../config/axios';

export const getTodoList = async (): Promise<ITodo[]> => {
  const res = await API.get('');
  return res.data;
};

export const addTodo = async (
  content: string,
  dueDate: string,
  isCompleted: boolean = false
): Promise<ITodo> => {
  try {
    const res = await API.post('', {
      content,
      dueDate,
      isCompleted
    });
    return res.data;
  } catch (err) {
    throw new Error('Add new Todo failed');
  }
};

export const editTodo = async (todo: ITodo): Promise<ITodo> => {
  try {
    const res = await API.put(`/${todo.id}`, {
      content: todo.content,
      dueDate: todo.dueDate,
      isCompleted: todo.isCompleted
    });
    return res.data;
  } catch (err) {
    throw new Error('Edit Todo failed');
  }
};

export const deleteTodo = async (id: number): Promise<ITodo> => {
  try {
    const res = await API.delete(`/${id}`);
    return res.data;
  } catch (err) {
    throw new Error('Delete Todo failed');
  }
};

export const toggleTodo = async (todo: ITodo): Promise<ITodo> => {
  try {
    const res = await API.put(`/${todo.id}`, {
      ...todo,
      isCompleted: !todo.isCompleted
    });
    return res.data;
  } catch (error) {
    throw new Error('Failed');
  }
};
