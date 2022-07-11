import styled from 'styled-components';

export const CardPropertyContainer = styled.div`
  height: fit-content;
  min-width: 100%;
  margin: 20px 0 0 0;
  border-width: 1px;
  border-color: #e5e5e5;
  border-style: solid;
  display: flex;
  padding: 10px;
  border-radius: 2px;
`;
export const Left = styled.div`
  height: 100%;
  max-width: 200px;
  margin-right: 30px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

export const Picture = styled.div`
  width: 200px;
  height: 200px;
  border-style: solid;
  border-width: 0.5px;
  border-color: #e5e5e5; ;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Name = styled.span`
  color: #0071c2;
  font-size: 24px;
  font-weight: 600;
`;

export const Distance = styled.span`
  font-size: 12px;
`;
export const Text = styled.span`
  font-size: 14px;
  color: #008009;
  font-weight: 700;
`;

export const Promo = styled.div`
  height: fit-content;
  width: fit-content;
  background-color: #008009;
  color: white;
  font-size: 12px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const SubText = styled.span`
  font-size: 12px;
  color: gray;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Bottom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LeftRight = styled.div`
  height: 100%;
  width: 40%;
`;
export const LeftLeft = styled.div`
  height: 100%;
  width: 60%;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const BottomLeftRight = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const TopLeftRight = styled.div`
  height: 100px;
`;

export const Availabillty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0071c2;
  padding: 8px;
  color: white;
  font-size: 16px;
  margin-top: 20px;
`;
