import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/cod-logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faJediOrder,
} from "@fortawesome/free-brands-svg-icons";

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
  z-index: 1;
  color: white;
`;

const NavCenter = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.25rem;

  img {
    width: 200px;
  }
`;

const NavLinks = styled.ul`
  height: auto;
  display: flex;
  background: none;
  position: relative;
  width: auto;
  padding-top: 0;
  font-size: 1rem;
  list-style-type: none;

  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  line-height: 0;

  a {
    color: white;
    margin: 0 0.5rem;
    font-size: 1rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="call of duty modern warfare logo" />
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavLinks>
        </NavHeader>
        <SocialLinks>
          <a href="https://twitter.com/Diablo">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/Diablo">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://diablo4.blizzard.com/en-us/">
            <FontAwesomeIcon icon={faJediOrder} />
          </a>
        </SocialLinks>
      </NavCenter>
    </Nav>
  );
};

export default Navbar;
