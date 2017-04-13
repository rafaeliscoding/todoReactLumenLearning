import Alt from '../alt.js';
import TodoActions from '../actions/todos.actions.js';

class TodoStore{
  constructor(){
    this.bindActions(TodoActions);
    // this.bindActions(TodoActions);
    this.state = {
      todos: []
    }
  }
  //new function to accept the actions that are bound above
  //passing set state here. This is where the updates happen
  onLoadActions(todos){
    this.setState({
      todos: todos
    })
  }
  onCreateTodo(todo){
    //must use this line to copy the array
    //...spread array creates a copy and gives it to variable
    let newState = {...this.state};
    newState.todos.push(todo);
    this.setState(newState)
  }
  onUpdateTodoTitle(nTodo){
    let nState = {...this.state};
    nState.todos.forEach((todo,i)=>{
      if (todo._id === nTodo._id) nState.todos[i] = nTodo;
    })
    this.setState(nState)
  }
  onUpdateTodoChecked(nTodo){
    this.onUpdateTodoTitle(nTodo)
  }

}
export default Alt.createStore(TodoStore)
