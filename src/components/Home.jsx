import styled from 'styled-components';
import Section from './Section';
import { selectProducts } from '../features/product/productSlice';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector(selectProducts);
  return (
    <Container>
      {products.map((item, index) => {
        return <Section key={index} {...item} />;
      })}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
