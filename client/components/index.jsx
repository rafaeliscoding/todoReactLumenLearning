import React, {Component} from 'react';
import {Link} from 'react-router';

import {TodoItem, TodoList} from './todos/todos.jsx';

import TodoActions from '../actions/todos.actions.js';
import TodoStore from '../stores/todos.stores.js';


export default class IndexComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    //bind your custom functions!!!!!!!
    this.setTodos =this.setTodos.bind(this);

  }
  componentWillMount(){
    //when we mount listen for changes in setDos, which is hooked up to
    //the store LISTEN COMES FROM ALT--observable
    TodoStore.listen(this.setTodos);
    //call loadActions
    TodoActions.loadActions();
  }

  render(){
    // {} jsx is NOT HTML it's js

      // <TodoItem item={todoItem} />
    return (
      <div>
        <Link to="add_todo">
          New Route
          <button onClick={(e)=>TodoActions.createTodo()}>New Todo</button>
        </Link>
        <TodoList>
          {this.state.todos.map((item, index)=>{
            return <TodoItem key={`TodoItem-${index}`} item={item} />
          })}
        </TodoList>

      </div>
    )
  }

  componentWillUnmount(){
    //like
    TodoStore.unlisten(this.setTodos);

  }
  //must bind this in the constructor
  setTodos(TodoStore){
    //links state to todo stores
    this.setState({
      todos: TodoStore.todos
    })
  }

}
IndexComponent.proTypes = {}
