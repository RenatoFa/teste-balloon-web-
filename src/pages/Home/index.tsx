import React from "react";
import Header from "../../components/Header";
import Mundo from "../../components/Background";
import { Container, Box } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Mundo />

      <Container>
        <span>A new way to connect people</span>
      </Container>
      <Box>
        <span className="balloon">Create your balloon</span>

        <form id="register">
          <input
            type="email"
            className="email"
            placeholder="Email ou Mobile Number"
          />
          <input type="name" className="fullname" placeholder="FullName" />
          <input type="username" className="username" placeholder="UserName" />
          <input type="password" className="password" placeholder="Password" />

          <button>Sign In</button>
        </form>

        <a href="a">Terms & Privacy Policy</a>
      </Box>
    </>
  );
};

export default Home;
