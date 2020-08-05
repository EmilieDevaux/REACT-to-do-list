// == Import npm
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input';
import Counter from '../Counter';
import List from '../List';

// == Import
import './styles.css';
import '../../styles/index.scss';

// == Import data
import data from '../../data/tasks';

class App extends React.Component {
  state = {
    todos: data,
    newTodoText: '',
  };

  changeTodoText = (todoContent) => {
    this.setState({
      newTodoText: todoContent,
    });
  };

  addNewToDo =() => {
    const { newTodoText } = this.state;
    const newTodo = {
      id: uuidv4(),
      label: newTodoText,
      done: false,
      favoris: false,
    };
    const newTodos = [newTodo, ...this.state.todos];
    this.setState({
      todos: newTodos,
      newTodoText: '',
    });
  };

  // filter todos to count how much aren't 'done' and show the number of in progress todos
  todoCount = () => {
    const { todos } = this.state;
    const filtered = todos.filter((todoObjet) => todoObjet.done === false);
    return filtered.length;
  };

  // create a new tab in the state to not modify the first one 
    // adding the same objects but if id === id object > change done property
  handleCheckTodo = (id) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  // to delete todos | i only keep those where the id does not correspond to the id i want to delete
  deleteTodo = (id) => {
    console.log("Je dois supprimer la todo ", id);
    const newTodos = this.state.todos.filter((todoObject) => {
      return todoObject.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  };

  //= handle click on the heart to declare favorite ones | if the id correspond to the id o the task I want to prefer = ok
  handleFavClick = (id) => {
    const newTodos = this.state.todos.map((todoObject) => {
      if (todoObject.id === id) {
        return {
          ...todoObject,
          favoris: !todoObject.favoris,
        };
      }
      return todoObject;
    });

    this.setState({
      todos: newTodos,
    });
  };

  //= to order tasks as done in the end, favorites at the top

  sortTodos = () => {
    const { todos } = this.state;

    const notDoneFav = todos.filter((todo) => !todo.done && todo.favoris);
    const notDoneNotFav = todos.filter((todo) => !todo.done && !todo.favoris);
    const DoneFav = todos.filter((todo) => todo.done && todo.favoris);
    const DoneNotFav = todos.filter((todo) => todo.done && !todo.favoris);

    return [...notDoneFav, ...notDoneNotFav, ...DoneFav, ...DoneNotFav];
  };

  render() {
    const { newTodoText } = this.state;
    return (
      <div className="app">
        <Input 
          text={newTodoText}
          onTodoSubmit={this.addNewToDo}
          changeText={this.changeTodoText} />
        <Counter number={this.todoCount()} />
        <List 
          list={this.sortTodos()}
          checkTodo={this.handleCheckTodo}
          deleteTodo={this.deleteTodo}
          handleFavClick={this.handleFavClick}/>
      </div>
    );
  }
}

// == Export
export default App;
