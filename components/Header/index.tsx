import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiArrowRightSLine } from "react-icons/ri";
import { useAddress } from "../../context/Address";
import ReactGA from "react-ga";

import { Container } from "./styles";

const Header: React.FC = () => {
  useEffect(() => {
    handleSubmit();
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_ANALITYCS}`);
  }, []);

  const [localAddress, setLocalAddress] = useState("");
  const { setAddress } = useAddress();

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_CORS_PROXY}http://ip-api.com/json/${localAddress}?fields=status,region,regionName,city,zip,lat,lon,offset,isp,query`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setAddress(data);

      ReactGA.event({
        category: "Search",
        action: "Searched for an IP Address",
      });
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Container>
      <h2>IP2Place</h2>
      <h4>IP Address Tracker</h4>
      <form
        className="input-box"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
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
