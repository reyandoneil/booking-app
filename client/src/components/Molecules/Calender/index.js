import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'react-date-range';
import { CalenderWrapper } from './CalenderElements';

const CalenderComp = ({ ss, onChange }) => {
 

  return (
    <CalenderWrapper ss={ss}>
      <Calendar onChange={onChange} date={new Date()} />
    </CalenderWrapper>
  );
};

export default CalenderComp;
