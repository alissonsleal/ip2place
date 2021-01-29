import React from "react";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <h1>Layout</h1>
      {children}
    </Container>
  );
};

export default Layout;
