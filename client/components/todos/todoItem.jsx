import React, {Component} from 'react';


export default class TodoItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: this.props.item.done || false
    }
  this.handleChecked = this.handleChecked.bind(this);

  }
  componentWillMount(){

  }

  render(){
    // {} jsx is NOT HTML it's js
    return (

    <li>
      <input type="checkbox" onClick={this.handleChecked} />

      {this.props.item.title}
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
