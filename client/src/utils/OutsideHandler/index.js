import { useEffect, useRef } from 'react';
import {
  openCalendar,
  openGuest,
} from '../../store/Action/GlobalAction';
import { useDispatch } from 'react-redux';

export default function useOutsideHandler(name) {
  console.log(name);
  const dispatch = useDispatch();
  const ref = useRef(null);
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      switch (name) {
        case 'calendar':
          dispatch(openCalendar(false));
          break;
        case 'guest':
          dispatch(openGuest(false));
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener('mousedown', handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return { ref };
}
