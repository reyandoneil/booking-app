import styled from 'styled-components';
import Slider from 'react-slick';

export const BrowseByCityWrapper = styled.div`
  margin-bottom: 50px;
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
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  font-size: 14px;
`;

export const CardContainer = styled(Slider)`
  .slick-list {
    margin: 0 -5px;
  }
  .slick-slide > div {
    padding: 0 5px;
  }
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
  ${(props) => {
    if (props.name === 'city') {
      return `
       height: 300px;
      `;
    } else {
      return `
       height: 200px;
      `;
    }
  }}
  margin-top: 10px;
  width: 100%;
`;

export const Card = styled.div`
${(props => {
  if(props.name === 'city'){
    return`
    height: 300px;
    width: 300px;`
  }else{
    return`     
    height: 200px;
    width: 200px;
    `
  }
})}
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

export const CityTitle = styled.span`
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
