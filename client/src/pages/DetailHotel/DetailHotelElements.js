import styled from 'styled-components';

export const DetailHotelContainer = styled.div`
  height: 100%;
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
  align-items: center;
  /* min-width: 700px; */
`;

export const PropertyName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #343434;
`;

export const PropertyType = styled.div`
  background-color: #949494;
  font-size: 0.8rem;
  color: white;
  height: fit-content;
  width: fit-content;
  margin-right: 20px;
  border-radius: 3px;
  padding: 2px 5px 2px 5px;
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
  ${(props) => {
    if (props.ss === 'sm' || props.ss === 'xs') {
      return `
      width: 100%;
    `;
    } else {
      return `
      width: 70%;
    `;
    }
  }}
  display: flex;
  flex-direction: column;
`;
export const DescTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const Desc = styled.p`
  text-align: justify;
  width: 100%;
`;

export const IconMarker = styled.img`
  cursor: pointer;
  height: 20px;
  margin-right: 10px;
  margin-left: 10px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.5);
  }
`;

export const MapWrapper = styled.div`
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: 99999;
`;

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 30%;
  position: absolute;
`;
export const Map = styled.div`
  position: absolute;
  height: 80%;
  width: 80%;
  padding-top: 100px;
  padding-left: 10%;
  padding-right: 10%;
`;

export const BackBtn = styled.img`
  height: 25px;
  margin-right: 40px;

  cursor: pointer;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.5);
  }
`;

export const HighlightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      margin-left: 0px;
      margin-right: 0px; 
      `;
    } else {
      return `
      margin-left: 30px;
      `;
    }
  }}
  max-width: 250px;
  background-color: #ebf3ff;
  height: 400px;
  padding: 20px;
`;

export const FacilityWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;
export const DescHighlight = styled.div`
  display: flex;
  margin-top: 30px;
  ${(props) => {
    if (props.ss === 'xs' || props.ss === 'sm') {
      return `
      flex-direction: column;
    `;
    } else {
      return `
    flex-direction: row;
    `;
    }
  }}
`;

export const DescHighlightWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const TextDesc = styled.span`
  font-size: 14px;
  margin: 5px 0 5px 0;
`;

export const ButtonReserveWrapper = styled.div`
  width: 140px;
`;
export const PropertyWrapper = styled.div`
  width: 80%;
`;

export const FacilityIconWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: fit-content;

`;

export const IconFacilityWrapper = styled.div`
  height: fit-content;
  min-width: fit-content;
  padding: 3px;
  
`;
