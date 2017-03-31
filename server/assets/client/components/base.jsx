import React, {Component} from 'react';

export default class Base extends Component{
  constructor(props){
    super(props);

  }

  render(){
    // {} jsx is NOT HTML it's js
    //this props children renders child COMPONENTS
    return (
      <div>
        <h1>Cottonheaded Ninny Muggins</h1>

         {this.props.children}
      </div>
    )
  }

}

Base.proTypes = {}
