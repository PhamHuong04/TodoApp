import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { useTodoState } from '../../context/TodoContext';
import { getTodoList } from '../../service/api/api';
import Badges from '../common/badges/Badges';
import Button from '../common/button/Button';
import Filter from '../common/filter/Filter';
import Header from '../common/header/Header';
import Loading from '../common/loading/Loading';
import TodoForm from '../common/todoForm/TodoForm';
import { filterTodo, getTodoSuccess, setLoading } from '../lib/action';
import { FilterAction } from '../lib/enum';
import { ITodo } from '../lib/interface';
import TodoItem from '../todoItem/TodoItem';
import styles from './TodoList.module.scss';
const TodoList = (): JSX.Element => {
  const { state, dispatch } = useTodoState();
  const [modalVisible, setModalVisible] = useState(false);
  const filterTodos = useMemo(() => {
    if (state.filter === FilterAction.FILTER_ACTIVE) {
      return state.todos.filter((todo) => !todo.isCompleted);
    } else if (state.filter === FilterAction.FILTER_COMPLETED) {
      return state.todos.filter((todo) => todo.isCompleted);
    }
    return state.todos;
  }, [state.filter, state.todos]);
  useEffect(() => {
    dispatch(setLoading(true));
    void getTodoList().then((data) => {
      dispatch(getTodoSuccess(data));
      dispatch(setLoading(false));
    });
  }, []);
  return (
    <Fragment>
      <div className={`${modalVisible ? styles.completed : ''}`}>
        <Header />
        <Button handleClick={() => setModalVisible(true)}>Add Todo</Button>

        <div className={styles.filter}>
          <div className={styles.filterItem}>
            <Badges title="Active">
              ( {state.todos.filter((todo) => !todo.isCompleted).length} )
            </Badges>

            <Badges title="Completed">
              ( {state.todos.filter((todo) => todo.isCompleted).length} )
            </Badges>

            <Badges title="All">( {state.todos.length} )</Badges>
          </div>
          <Filter>
            <select
              className={styles.selectBox}
              onChange={(e) => dispatch(filterTodo(e.target.value))}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </Filter>
        </div>
        <div className={styles.todoList}>
          {state.isLoading && (
            <div className={styles.loading}>
              <Loading></Loading>
            </div>
          )}
          {filterTodos.map((item: ITodo, index: number) => (
            <TodoItem key={index} item={item} />
          ))}
        </div>
      </div>
      {modalVisible && (
        <TodoForm title="Add Todo" setModalVisible={setModalVisible} />
      )}
    </Fragment>
  );
};

export default TodoList;
