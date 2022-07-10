import { DateRange } from 'react-date-range';
import { CalenderWrapper } from './CalenderElements';
import { useOutSide } from '../../../utils/'

const CalenderComp = ({
  ss,
  onChange,
  showSelectionPreview,
  moveRangeOnFirstSelection,
  months,
  ranges,
  direction,
}) => {
  const { ref } = useOutSide('calendar')
  return (
    <>
      <CalenderWrapper ss={ss} ref={ref}>
        <DateRange
          onChange={onChange}
          showSelectionPreview={showSelectionPreview}
          moveRangeOnFirstSelection={moveRangeOnFirstSelection}
          months={months}
          ranges={ranges}
          direction={direction}
        />
      </CalenderWrapper>
    </>
  );
};

export default CalenderComp;
