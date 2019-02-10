import React, { Component } from 'react'

class Receipt extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.cart = this.props.location.state;
    console.log(this.cart);
  }

  render() {
    
      if (this.cart === undefined) {
        return (<div style={{margin:'1rem'}}><h1>Huh? Why are you here?</h1></div>)
      } else if (this.cart.size === 0) {
        return (<div style={{margin:'1rem'}}><h1>You did not submit anything. </h1></div>)
      } 
      return (
      <div style={{margin: '1rem'}}>
        <h1> Submission Receipt </h1>
        <p> Here are your classes for next semester. Good luck!</p>
        {[...this.cart].map((x) => {
          let a = JSON.parse(x);
          return <p> {a.dept} {' '} {a.number} {' '} {a.title} {' '}</p>

        })}
      </div>
      );
  }


}

export default Receipt;