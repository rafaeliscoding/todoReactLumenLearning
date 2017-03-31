import React, {Component} from 'react';


export default class TodoList extends Component{
  constructor(props){
    super(props);
  

  }
  componentWillMount(){

  }

  render(){
    // {} jsx is NOT HTML it's js
    return (

      <ul>
        {this.props.children}
      </ul>
    )
  }
  componentWillUnmount(){

  }

}

TodoList.proTypes = {}
