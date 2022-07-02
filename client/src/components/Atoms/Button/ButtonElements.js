import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${(props) => {
    if (props.className === 'SearchButton') {
      if (props.ss === 'xs' || props.ss === 'sm') {
        return `
      width:100%;
      background-color: #0071c2;
      margin-left: 0px;
      margin-top:5px;
      font-size:20px;
 
      `;
      } else {
        return `
      width:30%;
      background-color: #0071c2;
      margin-left: 5px;
      font-size:20px;
     
      `;
      }
    } else {
      return `
    margin-right: 20px;  
    background-color: white;
    border:none
    `;
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  border: none;
  cursor: pointer;

  &.active {
  }
  &:hover {
    ${(props) => {
      if(props.className === 'SearchButton'){
        return`
        background-color: #0085E5;
        `
      }else {
        return`
        background-color: white;
        `
      }
    }}
    }

`;

export const ButtonTitle = styled.span`
  ${(props) => {
    if (props.className === 'SearchButton') {
      return `
      color: white;
      font-size: 20px;
    `;
    } else {
      return `  
      color: #004cb8;
      font-size: 14px;
      font-weight: 400;
      &:hover {
      color: #8DA4B4;
    }
    `;
    }
  }}
`;
