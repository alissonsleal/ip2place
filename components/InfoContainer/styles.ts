import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;

  div {
    display: flex;
    justify-content: space-between;
    place-content: center;
    text-align: left;
    position: absolute;
    top: 150px;

    max-width: 100%;
    background-color: var(--white);
    padding: 2rem;
    border-radius: 0.75rem;

    z-index: 2;

    span {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding-left: 1.5rem;
      margin-right: 1.5rem;
      width: 9rem;

      &:not(:first-child) {
        border-left: 1px solid gray;

        @media (max-width: 768px) {
          border-left: none;
        }
      }

      @media (max-width: 768px) {
        width: 80vw;
        height: 5rem;
        place-items: center;
      }

      h5 {
        color: #373780;
        margin: 0;
      }

      strong {
        padding: 1rem 0;

        @media (max-width: 768px) {
          padding: 0.5rem 0;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;
