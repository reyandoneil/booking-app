import styled from 'styled-components';

export const HeadersContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => {
    if (props.ss === 'sm') {
      return `
        margin-bottom: 25px;
        padding-left: 3%;
        padding-right: 3%;
        `;
    } else if (props.ss === 'xs') {
      return `
        margin-bottom: 25px;  
        padding-left: 2%;
        padding-right: 2%;
        `;
    } else {
      return `
        margin-bottom: 50px;
        padding-left: 10%;
        padding-right: 10%;
      `;
    }
  }}

  background-color: #003580;
`;
export const Headers = styled.div`
  width: 100%;
  height: 98px;
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
    display: none;
    `;
    } else {
      return `
    font-size: 50px;
    font-weight: 600;
    `;
    }
  }}
  color: white;
`;

export const SubTitle = styled.span`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      display: none;

    `;
    } else {
      return `
    font-size: 30px;
    `;
    }
  }}
  font-weight: 400;
  color: white;
`;

export const SearchMenu = styled.div`
  position: absolute;
  width: 82%;
  height: auto;
  background-color: #febb02;
  z-index: 3;
  top: 260px;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 16px 17px -15px rgba(0, 0, 0, 0.75);
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      flex-direction: column;
      font-size: 20px;
      top: 140px;

      `;
    } else {
      return `
        
      `;
    }
  }}
`;

export const SearchMenuWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const InputSearch = styled.input`
  color: white;
  height: 50px;
  width: 100%;
  border: none;
  color: black;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 16px 17px -15px rgba(0, 0, 0, 0.75);
  }
  &:focus {
    outline: none;
  }
  &:valid {
    box-shadow: 0 0 2px white;
    box-shadow: none;
  }
  &:valid:focus {
    background: white;
  }

  &:invalid {
    box-shadow: 0 0 2px #ff2020;
  }
  &:invalid:focus {
    background: #ffcece;
    box-shadow: none;
    color: black;
  }
`;

export const IconInputWrapper = styled.div`
  height: 52px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const IconInput = styled.img`
  height: 25px;
`;

export const ClearInput = styled.img`
  height: 20px;
  cursor: pointer;
`;
