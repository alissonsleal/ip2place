import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";

import { Container } from "./styles";

const Header: React.FC = () => {
  const [address, setAddress] = useState("");

  return (
    <Container>
      <h2>IP2Place - IP Address Tracker</h2>
      <form
        className="input-box"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={(address) => setAddress(address.target.value)}
        />
        <button type="submit" onClick={() => console.log("clicked")}>
          <RiArrowRightSLine size={28} />
        </button>
      </form>
    </Container>
  );
};

export default Header;
