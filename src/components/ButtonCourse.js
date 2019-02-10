import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import courses from '../data/courses'

class ButtonCourse extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };

    this.courseInfo = this.props.courseInfo;

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true});
  }

  render() {
    return (
      <>
        <Button variant="light" style={{width: '70%', margin: '0.3em'}} onClick={this.handleShow}>
          {this.courseInfo.dept} {' '} {this.courseInfo.number} {' '} {this.courseInfo.title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>

        </Modal>
      </>
    )
  }


}

export default ButtonCourse;
