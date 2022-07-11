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
        padding-left: 1%;
        padding-right: 1%;
        `;
    } else if (props.ss === 'xs') {
      return `
        margin-bottom: 25px;  
        padding-left: 1%;
        padding-right: 1%;
        `;
    } else if (props.ss === 'xl') {
      return `
        padding-left: 20%;
        padding-right: 20%;
      `;
    } else if (props.ss === 'lg') {
      return `
        padding-left: 15%;
        padding-right: 15%;
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
  height: fit-content;
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
      top: 80px;
      width: 94%;


      `;
    } else if (props.ss === 'lg') {
      return `
        width: 75%;
      `;
    } else if (props.ss === 'xl') {
      return `
        width: 65%;
      `;
    } else {
      return `
        
      `;
    }
  }}
`;

export const SearchMenuWrapper = styled.div`
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100%;  
      `;
    } else {
      return `
      width: 60%;  
      `;
    }
  }}
  display: flex;
  :hover {
    box-shadow: 6px 11px 5px -8px rgba(0, 0, 0, 0.4);
  }
`;

export const InputSearch = styled.input`
  color: white;
  height: 50px;
  width: 100%;
  border: none;
  color: #343434;

  &:hover {
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
    color: #343434;
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

export const CheckIn = styled.div`
  background-color: white;
  font-weight: bold;
  height: 100%;
  width: 95%;
  color: #343434;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100% ;

      `;
    } else {
      return `
      width: 50%;
      `;
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckOut = styled.div`
  background-color: white;
  color: #343434;
  font-weight: bold;
  height: 100%;
  width: 95%;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100% ;
      `;
    } else {
      return `
      width: 50%;
      `;
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DatePickerWrapper = styled.button`
  border-color: transparent;
  background-color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  height: 52px;

  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      flex-direction: row;
      width: 100% ;
      margin-top: 5px;
      `;
    } else {
      return `
      flex-direction: row;
      width:600px;
      margin-left: 5px;
      :hover {
        box-shadow: 6px 11px 5px -8px rgba(0, 0, 0, 0.4);
      }
      `;
    }
  }}
`;

export const Space = styled.div`
  width: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  justify-self: center;
  align-self: center;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      background-color: #febb02;  
      height: 120%;
      color: transparent;
      `;
    } else {
      return `
      height: 100%;
      color: gray;
      `;
    }
  }}
`;

export const Symbol = styled.span`
  font-size: 20px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      display: none;
      `;
    }
  }}
`;

export const Icon = styled.img`
  height: 50%;
  ${(props) => {
    if (props.ss === 'lg' || props.ss === 'md' || props.ss === 'xl') {
      return `
      display: none;
      `;
    }
  }}
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const IconWrapper2 = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const GuestsWrapper = styled.div`
  background-color: white;
  cursor: pointer;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 52px;
  margin-left: 5px;
  :hover {
    box-shadow: 6px 11px 5px -8px rgba(0, 0, 0, 0.4);
  }
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      width: 100% ;
      margin-left: 0px;
      margin-top: 5px;
      `;
    } else {
      return `
      width: 600px;
      margin-left: 5px;
      `;
    }
  }}
`;

export const FormComp = styled.div`
  top: 70px;
  right: 17%;
  padding: 10px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      margin-top: 5px;
      max-width: 100%;
      height: 200px;
      background-color: white;
    `;
    } else {
      return `
      position: absolute;
      width: 230px;
      min-height: 200px;
      background-color: white;
      `;
    }
  }}
`;
export const GuestInputWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;
export const GuestGroup = styled.div`
  width: 50%;
`;
export const TitleGroup = styled.div`
  padding-left: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
export const GuestGroupButton = styled.div`
  width: 50%;
`;
export const Count = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;
export const ButtonMin = styled.button`
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  height: 30px;
  width: 30px;
  border-color: #0085e5;
  color: #0085e5;
  border-style: groove;

  &:valid:focus {
    background: white;
    outline: solid 1px #0071c2;
  }
`;
