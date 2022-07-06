import { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { Calendar } from 'react-date-range';
import { CalenderWrapper } from './CalenderElements';

const CalenderComp = ({ ss }) => {
  const [calender, setCalender] = useState();
  const handleSelect = (date) => {
    setCalender(format(date, 'MM/dd/yyyy'));
  };
  return (
    <CalenderWrapper ss={ss}>
      <Calendar onChange={handleSelect} date={new Date()} />
    </CalenderWrapper>
  );
};

export default CalenderComp;
