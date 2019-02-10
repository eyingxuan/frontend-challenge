import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ButtonCourse extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.tooManyClose = this.tooManyClose.bind(this);
    this.handleAddRemove = this.handleAddRemove.bind(this);
    
    this.state = {
      show: false,
      tooMany: false
    };

    this.courseInfo = this.props.courseInfo;
    this.courseCart = this.props.courseCart;
    

  }

 

  handleClose() {
    this.setState({ show: false });
  }

  tooManyClose() {
    this.setState({tooMany: false});
  }

  handleShow() {
    this.setState({ show: true});
    
    
  }

  handleAddRemove() {
    this.setState({ show: false });
    if (!this.courseCart.has(JSON.stringify(this.courseInfo)) && this.courseCart.size === 7) {
      return this.setState({tooMany: true});
    }
    this.props.updater(this.courseInfo);

  }

  render() {
    return (
      <>
        <Button variant="light" style={this.props.styleB} onClick={this.handleShow}>
          {this.courseInfo.dept} {' '} {this.courseInfo.number} {' '} {this.courseInfo.title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.courseInfo.dept} {' '} {this.courseInfo.number} {' '} {this.courseInfo.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.courseInfo.description}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleAddRemove}>
              
              {this.courseCart.has(JSON.stringify(this.courseInfo)) ? "Remove from cart" : "Add to cart"}
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.tooMany} onHide={this.tooManyClose}>
          <Modal.Header closeButton>
            <Modal.Title>Oooops!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            You are taking too many classes!
          </Modal.Body>
          
        </Modal>
      </>
    )
  }


}

export default ButtonCourse;
