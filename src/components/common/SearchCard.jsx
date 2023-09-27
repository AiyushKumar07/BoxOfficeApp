import styled from 'styled-components';

export const SearchImgWrapper = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 40px;
  overflow: hidden;
  border: 1px solid #ddd;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const SearchCard = styled.div`
  width: 300px;
  height: 580px;
  padding: 20px;
  margin: 10px 10px;
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(129, 124, 124, 0.5);
  background-image: radial-gradient(
    circle 588px at 31.7% 40.2%,
    rgba(225, 200, 239, 1) 21.4%,
    rgba(163, 225, 233, 1) 57.1%
  );
  border: 5px outset white;
  color: black;
  h1 {
    text-align: center;
    margin: 10px 0;
    font-size: 20px;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
`;
