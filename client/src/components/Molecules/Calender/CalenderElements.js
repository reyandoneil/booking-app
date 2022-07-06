import styled from 'styled-components';

export const CalenderWrapper = styled.div`
  position: absolute;
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
            top: 220px;

        `;
    } else if (props.ss === 'md' || props.ss === 'lg'|| props.ss ==='xl') {
      return `
        top: 50px;
        left:33%;
        `;
    } else {
      return `
        top: 50px;
        left:59%;
        `;
    }
  }}
  box-shadow: 2px 16px 17px -15px rgba(0, 0, 0, 0.75);

`;
