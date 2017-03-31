import React, {Component} from 'react';
import {Link} from 'react-router';

import {TodoItem, TodoList} from './todos/todos.jsx'

export default class IndexComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {_id: 1, title: "To Do item", description: "This is a todo description", done: false},
        {_id: 2, title: "Another Todo Item", description: "This is a really really really really really really really really really really really really really really really really really long description", done: false}
      ]
    }

  }
  componentWillMount(){

  }

  render(){
    // {} jsx is NOT HTML it's js

      // <TodoItem item={todoItem} />
    return (
      <div>
        <Link to="add_todo">
          Add Todo
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

  }

}
IndexComponent.proTypes = {}
