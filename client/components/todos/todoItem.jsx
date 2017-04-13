import React, {Component} from 'react';
import TodoActions from '../../actions/todos.actions.js';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: this.props.item.done || false,
      isEditMode: false
    }
  // this.handleChecked = this.handleChecked.bind(this);
  this.handleToggle = this.handleToggle.bind(this);

  }
  componentWillMount(){

  }
  renderInput(){
    return (
      <input type="text" onBlur={this.handleToggle} defaultValue={this.props.item.title} />
    )

  }
  handleChecked(){
    this.setState({
      checked: !this.state.checked
    })
  }

  handleToggle(e){
    if (this.state.isEditMode){
      console.log(this.props.item);
      TodoActions.updateTodoTitle(this.props.item, e.target.value)
    }
    this.setState({
      isEditMode: !this.state.isEditMode
    });

  }

  renderTitle(){
    return (
      <span onClick={this.handleToggle} style={{minWidth: '100px'}}>
        {this.props.item.title === '' ? 'add your item' : this.props.item.title}
      </span>
    )


  }



  render(){
    // {} jsx is NOT HTML it's js
    return (
    <li>
      <input type="checkbox" defaultChecked={this.props.item.done} onClick={(e)=>TodoActions.updateTodoChecked(this.props.item, e.target.checked)} autofocus />
      {this.state.isEditMode ? this.renderInput() : this.renderTitle()}
    </li>
    )
  }

  componentWillUnmount(){

  }
  handleChecked(){
    this.setState({
      checked: !this.state.checked
    })
  }

}

TodoItem.proTypes = {
  item:React.PropTypes.object.isRequired
}
