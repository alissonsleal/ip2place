import React from "react";
import { useAddress } from "../../context/Address";

import { Container } from "./styles";

const InfoContainer: React.FC = () => {
  const { address } = useAddress();

  return (
    <>
      {address.status === "success" && (
        <Container>
          {console.log(address)}
          <div>
            <span>
              <h1>IP ADDRESS</h1>
              <strong>{address.query}</strong>
            </span>

            <span>
              <h1>LOCATION</h1>
              <strong>{`${address.city}, ${address.region} ${address.zip}`}</strong>
            </span>

            <span>
              <h1>TIMEZONE</h1>
              <strong>{`UTC ${+address.offset / 3600}:00`}</strong>
            </span>

            <span>
              <h1>ISP</h1>
              <strong>{address.isp}</strong>
            </span>
          </div>
        </Container>
      )}
    </>
  );
};

export default InfoContainer;
