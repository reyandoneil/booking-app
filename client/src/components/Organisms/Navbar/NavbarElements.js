import styled from 'styled-components';

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: #003580;
  height: 60px;
  max-width: 100%;
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
        padding-left: 10%;
        padding-right: 10%;
      `;
    }
  }}
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const Right = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Left = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
