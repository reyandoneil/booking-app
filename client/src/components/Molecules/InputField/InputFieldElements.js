import styled from 'styled-components';

export const Input = styled.input`
  color: white;
  height: 30px;
  width: 98%;
  border: none;
  color: #343434;
  /* margin-top: 5px; */
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
    outline: solid 1px #0071c2;
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

export const Label = styled.span`
  color: #343434;
  font-size: 0.8rem;
`;
export const InputWrapper = styled.div`
  margin-top: 10px;
`;

export const InputFieldWrapper = styled.div``;
