// components/TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { toggleTodo })(TodoList);
