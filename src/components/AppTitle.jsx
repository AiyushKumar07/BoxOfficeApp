import styled from 'styled-components';

export default function AppTitle(props) {
  const {
    title = 'Box Office',
    subtitle = 'Are You looking for a Show or An Actor ..?',
  } = props;
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
    background-image: linear-gradient(
      to right,
      #09f1b8,
      #00a2ff,
      #ff00d2,
      #fed90f
    );
    color: #000119;
    font-size: 10vmin;
    font-weight: 700;
    -webkit-text-stroke-color: transparent;
    -webkit-text-stroke-width: calc(1em / 15);
  }
  p {
    color: white;
    margin: 0;
  }
`;
