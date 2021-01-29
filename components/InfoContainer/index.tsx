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
              <h5>IP ADDRESS</h5>
              <strong>{address.query}</strong>
            </span>

            <span>
              <h5>LOCATION</h5>
              <strong>{`${address.city}, ${address.region} ${address.zip}`}</strong>
            </span>

            <span>
              <h5>TIMEZONE</h5>
              <strong>{`UTC ${+address.offset / 3600}:00`}</strong>
            </span>

            <span>
              <h5>ISP</h5>
              <strong>{address.isp}</strong>
            </span>
          </div>
        </Container>
      )}
    </>
  );
};

export default InfoContainer;
