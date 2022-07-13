import styled from 'styled-components';

export const DetailHotelContainer = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin-top: 40px;
  margin-bottom: 100px;

  ${(props) => {
    if (props.ss === 'sm') {
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
    } else if (props.ss === 'xs') {
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

export const TopMenu = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
`;

export const TitleMenu = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
`;

export const PropertyName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #343434;
`;

export const PropertyType = styled.div`
  background-color: #949494;
  color: white;
  padding: 10px;
  max-height: 100%;
  margin-right: 20px;
  border-radius: 3px;
`;
export const PropertyAddress = styled.span``;

export const PhotoGallery = styled.div`
  display: flex;
  min-width: 100%;
  height: 350px;
  margin-top: 15px;
`;
export const LeftWrapper = styled.div`
  height: 100%;
  width: 35%;
  margin-right: 10px;
`;
export const RightWrapper = styled.div`
  height: 103%;
  width: 65%;
`;
export const ImgWrapper = styled.div`
  height: 50%;
  width: 100%;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DescWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;
export const DescTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Desc = styled.p`

`;
