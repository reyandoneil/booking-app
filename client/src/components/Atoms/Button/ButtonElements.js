import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  ${(props) => {
    if (props.className === 'SearchButton') {
      if (props.ss === 'xs' || props.ss === 'sm') {
        return `
      width:100%;
      background-color: #0071c2;
      margin-left: 0px;
      margin-top:7px;
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
    } else if (props.className === 'sidebar') {
      return `
      width:100%;
      background-color: #0071c2;
      margin-left: 0px;
      font-size:20px;
      height:50px;
      `;
    } else if (props.className === 'availability') {
      return `
      width:100%;
      background-color: #0071c2;
      margin-left: 0px;
      font-size:20px;
      height:40px;
      `;
    } else if (props.className === 'topDetail') {
      return `
      width:100%;
      background-color: #ebf3ff;
      margin-left: 0px;
      font-size:20px;
      height:100%;
      margin-right: 3px;
      border-radius:4px;
      `;
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
      if (
        props.className === 'SearchButton' ||
        props.className === 'sidebar' ||
        props.className === 'availability'
      ) {
        return `
        background-color: #0085E5;
        `;
      } else if (props.className === 'topDetail') {
        return `
        `;
      } else {
        return `
        background-color: white;
          
        `;
      }
    }}
  }
`;

export const ButtonTitle = styled.span`
  ${(props) => {
    if (
      props.className === 'SearchButton' ||
      props.className === 'sidebar' ||
      props.className === 'availability'
    ) {
      return `
      color: white;
      font-size: 16px;
    `;
    } else if (props.className === 'topDetail') {
      return `
        color: #0071c2;
        font-size:14px;
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
  &:hover {
    ${(props) => {
      if (props.className === 'topDetail') {
        return `
        color: #8DA4B4;
        `;
      }
    }}
  }
`;
