import { useRef, useEffect } from "react"
import { useDispatch } from "react-redux"
import { openCalendar, openGuestForm } from '../../store/Action/GlobalAction'

const useOuteSideBox = (name) => {
    const ref = useRef(null)
    const dispatch = useDispatch()
    const clickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            // outside click
            switch (name) {
                case 'calendar':
                    dispatch(openCalendar(false))
                    break;
                case 'guestForm':
                    dispatch(openGuestForm(false))
                    break;
                default:
                    break;
            }
        }

    }

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', clickOutside);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    })


    return { ref }

}

export default useOuteSideBox