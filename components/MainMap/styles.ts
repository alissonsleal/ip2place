import styled from "styled-components";

export const Container = styled.div`
  @import "mapbox-gl/dist/mapbox-gl.css";

  width: 100%;
  height: 100vh;
  background-color: #121212;

  .map-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;
