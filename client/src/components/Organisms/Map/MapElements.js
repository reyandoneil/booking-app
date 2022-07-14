import styled from 'styled-components';

export const CloseButton = styled.img`
  cursor: pointer;
  height: 40px;
  position: fixed;
  top: 50px;
  right: 10%;
  z-index: 999;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.5);
  }
`;
