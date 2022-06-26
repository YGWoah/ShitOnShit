import React, { useEffect } from 'react';

const Row = (props) => {
  useEffect(() => {
    console.log(props.item);
  }, []);
  return (
    <div className="tr">
      <td>{props.item.section_id}</td>
      <td className="course">
        {props.item.course.course_number +
          ' ' +
          props.item.course.course_name}
      </td>

      <td>{1}</td>
      <td>{props.item.instructor.name}</td>
      <td>
        {props.item.meeting_time.pid +
          props.item.meeting_time.day +
          props.item.meeting_time.time}
      </td>
    </div>
  );
};

export default Row;
