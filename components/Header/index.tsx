import React, { useState } from "react";
import axios from "axios";
import { RiArrowRightSLine } from "react-icons/ri";
import { useAddress } from "../../context/Address";

import { Container } from "./styles";

const Header: React.FC = () => {
  const [localAddress, setLocalAddress] = useState("");
  const { setAddress } = useAddress();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `http://ip-api.com/json/${localAddress}?fields=status,region,regionName,city,zip,lat,lon,offset,isp,query`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setAddress(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Container>
      <h2>IP2Place - IP Address Tracker</h2>
      <form
        className="input-box"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="IP Address"
          value={localAddress}
          placeholder="Search for any IP address or domain"
          onChange={(event) => {
            setLocalAddress(event.target.value);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          <RiArrowRightSLine size={28} />
        </button>
      </form>
    </Container>
  );
};

export default Header;
