import React from "react";

import { Container } from "./styles";

const InfoContainer: React.FC = () => {
  return (
    <Container>
      <div>
        <span>
          <h5>IP ADDRESS</h5>
          <strong>192.168.1.1</strong>
        </span>

        <span>
          <h5>LOCATION</h5>
          <strong>Brooklyn, NY 10001</strong>
        </span>

        <span>
          <h5>TIMEZONE</h5>
          <strong>UTC -05:00</strong>
        </span>

        <span>
          <h5>ISP</h5>
          <strong>SpaceX Starlink</strong>
        </span>
      </div>
    </Container>
  );
};

export default InfoContainer;
