import Row from './Row';
import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
//import Schedule from './Schedule';
import './Schedule.css';

const Schedulee = () => {
  const [Sections, setSections] = useState({ schedule: [] });
  const fetchData = useCallback(() => {
    axios
      .get('https://api.npoint.io/66ff1c4ec2b409dad547/')
      .then((data) => {
        setSections(data.data);
        console.count();
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
        }
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(Sections);
  }, [Sections]);
  return (
    <div className="schedule">
      <h3 className="class-Name">Mip S1</h3>
      <div className="table">
        <div className="tr">
          <th>Class</th>
          <th>Course</th>
          <th>Block-Room</th>
          <th>instructor</th>
          <th>Class Timing</th>
        </div>
        {Sections.schedule.map((item) => {
          if (item.section == 'S1') return <Row item={item} />;
        })}
      </div>
      <h3 className="class-Name">Mip S3</h3>
      <div className="table">
        <div className="tr">
          <th>Class</th>
          <th>Course</th>
          <th>Block-Room</th>
          <th>instructor</th>
          <th>Class Timing</th>
        </div>
        {Sections.schedule.map((item) => {
          if (item.section == 'S1') return <Row item={item} />;
        })}
      </div>
    </div>
  );
};

export default Schedulee;
