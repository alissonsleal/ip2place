import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  height: 30vh;

  background: rgb(70, 64, 154);
  background: linear-gradient(
    90deg,
    rgba(70, 64, 154, 1) 0%,
    rgba(95, 133, 242, 1) 100%
  );

  h2 {
    color: white;
    padding: 0;
  }

  .input-box {
    display: flex;
    place-items: center;
    background-color: black;

    overflow: hidden;
    border-radius: 0.75rem;

    input {
      width: 25rem;
      padding: 1rem;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;

      ::placeholder {
        font-weight: 400;
      }
    }

    button {
      svg {
        color: white;
        margin: 0 0.5rem;
      }
    }
  }
`;
