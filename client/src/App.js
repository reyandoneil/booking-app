import { useEffect } from 'react';
import Router from './utils/Router';
import GlobalStyle from './GlobalStyle';
import { setScreenSize } from './store/Action/GlobalAction';
import { useBreakpoint } from './utils';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();
  useEffect(() => {
    dispatch(setScreenSize(breakpoint));
  }, [dispatch, breakpoint]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
