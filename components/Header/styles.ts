import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  place-items: center;
  flex-direction: column;
  height: 30vh;
  padding: 1rem;

  background: rgb(70, 64, 154);
  background: linear-gradient(
    90deg,
    rgba(70, 64, 154, 1) 0%,
    rgba(95, 133, 242, 1) 100%
  );

  h2,
  h3 {
    color: white;
    padding: 0;
    margin: 0rem;
  }

  h3 {
    font-size: 16px;
  }

  .input-box {
    display: flex;
    place-items: center;
    background-color: black;
    width: 100%;
    max-width: 25rem;
    margin-top: 0.5rem;

    overflow: hidden;
    border-radius: 0.75rem;

    @media (max-width: 400px) {
      height: 78px;
    }

    label {
      visibility: visible;
      width: 0;
    }

    input {
      width: 100%;
      padding: 1rem;
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      height: 100%;

      ::placeholder {
        font-weight: 400;
        white-space: normal;
        word-wrap: break-word;

        @media (max-width: 400px) {
          width: 100px;
          height: 100%;
          text-align: center;
        }
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
