import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courseCart: new Set([])
    };
    
    this.updateState = (course) => {
      // console.log(this.state.courseCart);
      let eqv = JSON.stringify(course);
      if (this.state.courseCart.has(eqv)) {
        let temp = this.state.courseCart;
        temp.delete(eqv);
        this.setState((state) => {
          let temp = state.courseCart;
          temp.delete(eqv);
          return ({courseCart: temp});
        });
      } else {
        
        this.setState((state) => {
          return ({courseCart: state.courseCart.add(eqv)});
        });
      }
    };
    
  }

  



  render() {
    
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossOrigin="anonymous"
        />
        <Nav />
        <div style={{
          width: '100%',
          boxSizing: 'border-box',
          paddingLeft: '2em',
          paddingTop: '1em',
          paddingRight: '2em',
          display: "flex"
          
        }}>
          <div style={{width: '70%'}}> <Courses courseCart={this.state.courseCart} updater={this.updateState} /> </div>
          <div style={{width: '30%'}}> <Cart courseCart={this.state.courseCart} updater={this.updateState} /> </div> 
        </div>
      </>
    );
  }
}

export default App
