import styled from 'styled-components';

export const BrowseByCityWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'sm') {
      return `
        padding-left: 3%;
        padding-right: 3%;
        `;
    } else if (props.ss === 'xs') {
      return `
        padding-left: 2%;
        padding-right: 2%;
        `;
    } else {
      return `
        margin-bottom: 30px;
        padding-left: 10%;
        padding-right: 10%;
      `;
    }
  }}
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  font-size: 14px;
`;

export const CardContainer = styled.div`
  margin-top: 10px;
  height: 250px;
  width: 100%;
  background-color: lightgray;
`;
