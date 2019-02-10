import React from 'react';
import courses from '../data/courses';
import ButtonCourse from './ButtonCourse';


class Courses extends React.Component {
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
    return (
      <>
        <div style={{width: '100%'}}>
          {courses.map(({ dept, number, title, description }) => (
    
            <ButtonCourse courseInfo={ {dept, number, title, description} } courseCart={this.state.courseCart} updater={this.props.updater} styleB={{width: '70%', margin: '0.3em'}} key={description} />
          ))}
        </div>
      </>
    )
  }
}

export default Courses;