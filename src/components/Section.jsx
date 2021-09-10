import styled, { keyframes } from 'styled-components';
import downArrow from '../images/down-arrow.svg';

const Section = ({ title, desc, bg, leftBtnText, rightBtnText }) => {
  return (
    <Wrap bg={bg}>
      <ItemText>
        <h2>{title}</h2>
        <p>{desc}</p>
      </ItemText>

      <ButtonGroup>
        {leftBtnText && <Button theme="dark">{leftBtnText}</Button>}
        {rightBtnText && <Button>{rightBtnText}</Button>}
      </ButtonGroup>

      <DownArrow src={downArrow} />
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
`;

const ItemText = styled.div`
  flex-grow: 1;
  padding-top: 15vh;
  text-align: center;
  text-transform: capitalize;

  h2 {
    font-size: 4rem;
    padding: 0.4rem 0;
  }

  p {
    font-size: 1.4rem;
    padding-bottom: 0.8rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;

  button:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      margin-right: 0;
    }
  }
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.theme === 'dark' ? 'rgba(23, 26, 32, 0.8)' : '#fff'};
  border: none;
  color: ${(props) =>
    props.theme === 'dark' ? '#fff' : 'rgba(23, 26, 32, 0.8)'};
  cursor: pointer;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  height: 4rem;
  margin-bottom: 1rem;
  margin-right: 2.4rem;
  opacity: 0.85;
  text-transform: uppercase;
  width: 25.6rem;
`;
const animaDown = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(0.5rem);
  }
  60% {
    transform: translateY(0.3rem);
  }
`;

const DownArrow = styled.img`
  animation: ${animaDown} 2s infinite;
  cursor: pointer;
  height: 4rem;
  margin-bottom: 4.5rem;
  margin-top: 2rem;
  transition: transform 0.35s linear;
`;
