import React from "react";
import { Container } from "./styles";
import Balloon from "../../assets/images/Balloon@4x.png";

const Header: React.FC = () => {
  return (
  
  <>
    <Container>
      <img src={Balloon} alt="Balloon" />

      <a href="a" className="Home">
        Home
      </a>
      <a href="a" className="Store">
        Store
      </a>
      <a href="a" className="About">
        About
      </a>
      <a href="a" className="Community">
        Community
      </a>
      <a href="a" className="Support">
        Support
      </a>

      <a href="a" className="Forgot">
        Forgot your login details
      </a>

      <form id="email-password">
        <input
          type="email"
          className="email"
          placeholder="Email ou Mobile Number"
        />
        <input type="password" className="password" placeholder="Password" />
      </form>

      <button>Entrar</button>
    </Container>

    </>
  );
};

export default Header;
