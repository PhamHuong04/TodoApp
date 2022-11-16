import React, { useState } from 'react';
import { useTodoState } from '../../../context/TodoContext';
import { addTodo, editTodo, getTodoList } from '../../../service/api/api';
import { addTodoSuccess, editTodoItem, getTodoSuccess, setLoading } from '../../lib/action';
import usehandleChange from '../../lib/hook/useHandleChange';
import { ITodo } from '../../lib/interface';
import styles from './TodoForm.module.scss';

interface Props {
  title: string
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  item?: ITodo
}
const TodoForm = (props: Props): JSX.Element => {
  const { title, setModalVisible, item } = props;
  const initialValues = {
    content: item?.content ?? '',
    dueDate: item?.dueDate ?? ''
  };

  const { dispatch } = useTodoState();

  const { values, setValues, handleChange } = usehandleChange(initialValues);
  const [errorName, setErrorName] = useState('');
  const handleSubmit = (): void => {
    if (values.content === '') {
      setErrorName('Todo content is empty!');
    } else if (values.dueDate === '') {
      setErrorName('Select due time!');
    } else if (item === undefined) {
      dispatch(setLoading(true));
      void addTodo(values.content, values.dueDate).then((data) => {
        console.log('data', data);
        dispatch(addTodoSuccess(data));
        dispatch(setLoading(false));
      });
      setValues(initialValues);
      setModalVisible(false);
    } else {
      dispatch(setLoading(true));
      void editTodo({
        ...item,
        content: values.content,
        dueDate: values.dueDate
      }).then((data) => {
        dispatch(editTodoItem(data));
        void getTodoList().then((data) => {
          dispatch(getTodoSuccess(data));
          dispatch(setLoading(false));
        });
      });
      setValues(initialValues);
      setModalVisible(false);
    }
    setErrorName('');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className="todo">
        <div className="content">
          <p>What you needs to be done?</p>
          <input
            type="text"
            name="content"
            className={styles.textFiled}
            value={values.content}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className={styles.time}>
          <p>Due Date:</p>
          <input
            type="datetime-local"
            name="dueDate"
            value={values.dueDate}
            className={styles.datePicker}
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      {errorName.length > 0 && <p className={styles.error}>{errorName}</p>}
      <div className={styles.icon}>
        <div className={styles.cancel} onClick={() => setModalVisible(false)}>
          <button>Cancel</button>
        </div>
        <div className={styles.save} onClick={() => handleSubmit()}>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
