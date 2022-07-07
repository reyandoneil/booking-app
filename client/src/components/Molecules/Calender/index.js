import { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { CalenderWrapper } from './CalenderElements';

const CalenderComp = ({
  ss,
  onChange,
  showSelectionPreview,
  moveRangeOnFirstSelection,
  months,
  ranges,
  direction,
}) => {
  return (
    <CalenderWrapper ss={ss}>
      <DateRange
        onChange={onChange}
        showSelectionPreview={showSelectionPreview}
        moveRangeOnFirstSelection={moveRangeOnFirstSelection}
        months={months}
        ranges={ranges}
        direction={direction}
      />
    </CalenderWrapper>
  );
};

export default CalenderComp;
