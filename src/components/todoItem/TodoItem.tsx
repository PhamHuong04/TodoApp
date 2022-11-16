import React, { useState } from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './TodoItem.module.scss';
import { ITodo } from '../lib/interface';
import { deleteTodo, toggleTodo } from '../../service/api/api';
import { deleteTodoItem, toggleTodoItem } from '../lib/action';
import { useTodoState } from '../../context/TodoContext';
import TodoForm from '../common/todoForm/TodoForm';
import { Status } from '../lib/enum';
const HOUR = 1000 * 60 * 60;
interface Props {
  item: ITodo
}
const TodoItem = ({ item }: Props): JSX.Element => {
  const { dispatch } = useTodoState();

  const [modalVisible, setModalVisible] = useState(false);

  const handleDeleteItem = (): void => {
    void deleteTodo(item.id).then((data) => {
      dispatch(deleteTodoItem(data.id));
    });
  };

  const handleToggleItem = (): void => {
    void toggleTodo(item).then((data) => {
      dispatch(toggleTodoItem(data));
    });
  };
  const lessThanOneHourAgo = (date: number): string => {
    if (date - Date.now() < 0) {
      return Status.DUEDATE;
    } else if (date - Date.now() <= HOUR && date - Date.now() >= 0) {
      return Status.WARNING;
    }
    return Status.ACTION;
  };
  return (
    <div className={styles.todoItem}>
      <input
        type="checkbox"
        onClick={handleToggleItem}
        checked={item.isCompleted}
      />
      <div
        className={`${styles.content} ${
          item.isCompleted ? styles.completed : ''
        }`}
      >
        {item.content}
      </div>
      <div
        className={`${styles.dueDate} ${
          item.isCompleted ? styles.completed : ''
        }`}
      >
        {new Date(item.dueDate).toLocaleString()}
      </div>
      <div className={styles.warningDueDate}>
        {lessThanOneHourAgo(new Date(item.dueDate).getTime())}
      </div>
      <div className={styles.icon}>
        <div className={styles.iconEdit} onClick={() => setModalVisible(true)}>
          <BorderColorIcon />
        </div>
        <div className={styles.iconDelete} onClick={handleDeleteItem}>
          <DeleteIcon />
        </div>
      </div>

      {modalVisible && (
        <TodoForm
          item={item}
          setModalVisible={setModalVisible}
          title="Edit Todo"
        ></TodoForm>
      )}
    </div>
  );
};

export default TodoItem;
