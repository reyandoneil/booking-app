import styled from 'styled-components';

export const ErrorMessageContainer = styled.div`
  padding: 10px;
  margin-bottom: 7px;
  ${(props) => {
    if (props.className === 'sideBar') {
      return `
      background-color: #ffebeb;
      `;
    } else {
      return `
      background-color: #a30000;
      `;
    }
  }}
  height: fit-content;
  font-size: 12px;
  ${(props) => {
    if (props.ss === 'xl' || props.ss === 'lg' || props.ss === 'md') {
      return `
            position: absolute;
            top: 60px;
            `;
    }
  }}
`;

export const Message = styled.span`
  ${(props) => {
    if (props.className === 'sideBar') {
      return `
    color: black;
    `;
    } else {
      return `
    color: white;
    `;
    }
  }}
`;
