import styled, { keyframes } from 'styled-components';
import downArrow from '../images/down-arrow.svg';

export const Section = ({
  title,
  desc,
  background,
  leftBtnText,
  rightBtnText,
  isIcon,
}) => {
  return (
    <Wrap background={background}>
      <WrapItem>
        <ItemText>
          <h2>{title}</h2>
          {desc && <p>{desc}</p>}
        </ItemText>
      </WrapItem>

      <ButtonGroup>
        {leftBtnText && <Button type="dark">{leftBtnText}</Button>}
        {rightBtnText && <Button>{rightBtnText}</Button>}
      </ButtonGroup>

      {isIcon && <DownArrow src={downArrow} />}
    </Wrap>
  );
};

export default Section;

export const Wrap = styled.div`
  background-image: url(${(props) => props.background});
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

export const WrapItem = styled.div`
  flex-grow: 1;
`;

export const ItemText = styled.div`
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

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  button:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    button {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.type === 'dark' ? 'rgba(23, 26, 32, 0.8)' : '#fff'};
  border: none;
  color: ${(props) =>
    props.type === 'dark' ? '#fff' : 'rgba(23, 26, 32, 0.8)'};
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
export const animaDown = keyframes`
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

export const DownArrow = styled.img`
  animation: ${animaDown} 2s infinite;
  cursor: pointer;
  height: 4rem;
  margin-bottom: 4.5rem;
  transition: transform 0.35s linear;
`;
