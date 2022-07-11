import styled from 'styled-components';

export const CovidMessageWrapper = styled.div`
  height: 80px;
  max-width: 100%;
  /* margin: 70px 0px 20px 0px; */

  ${(props) => {
    if (props.ss === 'sm') {
      return `
        padding-left: 3%;
        padding-right: 3%;
        margin: 20px 0px 20px 0px;
        `;
    } else if (props.ss === 'xs') {
      return `
        padding-left: 2%;
        padding-right: 2%;
        margin: 20px 0px 20px 0px;
        `;
    } else if (props.ss === 'lg') {
      return `
        padding-left: 15%;
        padding-right: 15%;
        margin: 70px 0px 20px 0px;

      `;
    } else if (props.ss === 'xl') {
      return `
        padding-left: 20%;
        padding-right: 20%;
        margin: 70px 0px 20px 0px;
      `;
    } else {
      return `
        padding-left: 10%;
        padding-right: 10%;
        margin: 70px 0px 20px 0px;

      `;
    }
  }}
`;

export const CovidMessage = styled.div`
  height: 100%;
  max-width: 100%;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgray;
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  margin-left: 20px;
`;

export const Links = styled.a`
  text-decoration: none;
  color: #0071c2;
  margin-left: 5px;
`;
