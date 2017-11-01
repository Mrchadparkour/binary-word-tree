import React, { Component } from 'react';

class Leaf extends Component {
  constructor(){
    super();
    this.state = {

    };
  }
  render(){
    return(
      <div>
        <p>{`Val: ${this.state.val}`}</p>
        <p>{`Right: ${this.state.right}`}</p>
        <p>{`Left: ${this.state.left}`}</p> 
      </div>
    );
  }
};

export default Leaf ;
