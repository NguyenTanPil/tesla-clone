import styled from 'styled-components';
import bg from '../images/model-s.jpg';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order online for Touchless Delivery"
        bg={bg}
        leftBtnText="custome order"
        rightBtnText="EXISTING INVENTORY"
      ></Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
