import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class ButtonCourse extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAddRemove = this.handleAddRemove.bind(this);
    
    this.state = {
      show: false,
    };

    this.courseInfo = this.props.courseInfo;
    this.courseCart = this.props.courseCart;

  }

 

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true});
    
    
  }

  handleAddRemove() {
    this.setState({ show: false });
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
      </>
    )
  }


}

export default ButtonCourse;
