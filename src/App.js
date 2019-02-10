import React, { Component } from 'react'
import './App.css'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'

class App extends Component {
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
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
          <div style={{width: '70%'}}> <Courses/> </div>
          <div style={{width: '30%'}}> <Cart /> </div> 
        </div>
      </>
    );
  }
}

export default App
