import React from 'react'
import ButtonCourse from './ButtonCourse';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      courseCart: this.props.courseCart 
    }
   
    
  }
  
  componentWillReceiveProps(nextProps) {
    
    this.setState({courseCart: nextProps.courseCart});
  }
  
  

  render() {
    return(
      <>
        <div style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          marginBottom: '1.5rem',
          borderRadius: '4px',
        }}>
          <h4>Course Cart</h4>
          
          {
            
            (this.state.courseCart.size === 0) ? (<p>Your cart is empty!</p>) :
            ([...this.state.courseCart].map((x) => (
              
              <ButtonCourse courseInfo={ JSON.parse(x) } updater={this.props.updater} styleB={{width: '100%', marginBottom: '0.3em'}} courseCart = {this.state.courseCart} inCart={true} key={x}/>
            )))
          }
          <Link to={{pathname: "/subRec", state: this.state.courseCart}}>
            <Button variant="primary"> Submit </Button>
          </Link>
          
        </div>
      </>
    )
  }
}

export default Cart;

