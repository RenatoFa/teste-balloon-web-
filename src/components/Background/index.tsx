import React from "react";
import { Container } from "./styles";
import Lottie from "react-lottie";

import Mundo from "../../assets/images/data.json";

const Background: React.FC = () => {
  return (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: Mundo,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={"100%"}
        width={1920}
      />
    </Container>
  );
};

export default Background;
