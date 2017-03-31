import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AddTodo extends Component{
  constructor(props){
    super(props);

  }

  render(){
    // {} jsx is NOT HTML it's js
    return (
      <div>
        <Link to="/">Back to List</Link>
        <p>Add to dod items here</p>
      </div>
    )
  }

}

AddTodo.proTypes = {}
