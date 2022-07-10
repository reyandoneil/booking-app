import styled from 'styled-components';

export const ListHotelContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin-top: 40px;
 
  ${(props) => {
    if (props.ss === 'sm') {
      return `
        margin-bottom: 25px;
        padding-left: 1%;
        padding-right: 1%;
        `;
    }else if(props.ss === 'xl'){
      return`
        padding-left: 20%;
        padding-right: 20%;
      `
    } 
    else if(props.ss === 'lg'){
      return`
        padding-left: 20%;
        padding-right: 20%;
      `
    }else if (props.ss === 'xs') {
      return `
        margin-bottom: 25px;  
        padding-left: 1%;
        padding-right: 1%;
        `;
    } else {
      return `
        margin-bottom: 50px;
        padding-left: 10%;
        padding-right: 10%;
      `;
    }
  }}
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const SearchWrapper = styled.div`
  min-width: 264px;
  height: 100%;

`;
export const ListHotelWrapper = styled.div`
  margin: 14px;
  min-width: 640px ;
`;

export const Text = styled.h2`
`
