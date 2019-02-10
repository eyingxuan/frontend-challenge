import React from 'react';
import courses from '../data/courses';
import ButtonCourse from './ButtonCourse';

export default () => (
  <>
    <div style={{width: '100%'}}>
      {courses.map(({ dept, number, title, description }) => (

        <ButtonCourse courseInfo={ {dept, number, title, description} } />
      ))}
    </div>
  </>
)
