import styled from 'styled-components';

export const CalenderWrapper = styled.div`
  position: absolute;
  ${(props) => {
    console.log(props.ss, 'elements');

    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
            top: 150px;
        left:6%;

        `;
    } else if (props.ss === 'md') {
      return `
        top: 50px;
        left:55%;
        `;
    } else {
      return `
        top: 50px;
        left:59%;
        `;
    }
  }}
`;
