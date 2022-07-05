import styled from "styled-components";
import Slider from 'react-slick';

export const CardContainer = styled(Slider)`
  .slick-list {
    margin: 0 -5px;
  }
  .slick-slide > div {
    padding: 0 5px;
  }
  margin-top: 10px;
  height: 200px;
  width: 100%;
`;

export const Card = styled.div`
  height: 200px;
  width: 250px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 80%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.span`
  font-weight: 600;
`;

export const Total = styled.span`
  color: gray;
  font-size: 0.8rem;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;