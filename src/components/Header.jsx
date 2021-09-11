import styled from 'styled-components';
import logo from '../images/logo.svg';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <a href="!#">
        <img src={logo} alt="logo" />
      </a>
      <Menu>
        <NavLink to="/">
          <span>Model S</span>
        </NavLink>
        <NavLink to="/">
          <span>Model 3</span>
        </NavLink>
        <NavLink to="/">
          <span>Model X</span>
        </NavLink>
        <NavLink to="/">
          <span>Model Y</span>
        </NavLink>
      </Menu>
      <div>
        <NavLink to="/">
          <span>shop</span>
        </NavLink>
        <NavLink to="/">
          <span>Tesla Account</span>
        </NavLink>
        <NavLink to="/">
          <span>
            <FaBars onClick={handleClick} />
          </span>
        </NavLink>
      </div>
      <Sidebar show={isOpen}>
        <WrapIcon>
          <CloseIcon onClick={handleClick} />
        </WrapIcon>
        <NavLink to="/">
          <span>Model S</span>
        </NavLink>
        <NavLink to="/">
          <span>Model 3</span>
        </NavLink>
        <NavLink to="/">
          <span>Model X</span>
        </NavLink>
        <NavLink to="/">
          <span>Model Y</span>
        </NavLink>
        <NavLink to="/">
          <span>Solar Roof</span>
        </NavLink>
        <NavLink to="/">
          <span>Solar Panels</span>
        </NavLink>
        <NavLink to="/">
          <span>Existing Inventory</span>
        </NavLink>
        <NavLink to="/">
          <span>Used Inventory</span>
        </NavLink>
      </Sidebar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6rem;
  padding: 0 3.2rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.4rem 0.8rem;

  span {
    margin: 0 0.8rem;
  }
`;

const Sidebar = styled.aside`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 2.4rem;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 10;

  a {
    min-width: 20rem;
    margin-bottom: 0.8rem;
    padding: 0.4rem 0.8rem;
    text-align: left;
    text-transform: capitalize;
  }
`;

const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 2.4rem 0;
`;

const CloseIcon = styled(AiOutlineClose)`
  cursor: pointer;
  font-size: 2rem;
`;
