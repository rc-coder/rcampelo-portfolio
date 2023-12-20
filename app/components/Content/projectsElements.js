import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80vw;
  height: 60vh;
  padding: 0 10px;
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    justify-content: center;
    width: 80vw;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 11px;
    border: 1px solid ${(props) => props.theme.outline};
    transition: all 0.5s;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    border: 1px solid ${(props) => props.theme.outline};
    background-color: transparent;
    transition: all 0.5s;
  }

  & div {
    padding: 1vh 0;
    width: 60vw;
    @media screen and (max-width: 700px) {
      width: 70vw;
    }

    & a {
      font-size: 0.7rem;
      text-decoration: none;
      color: ${(props) => props.theme.title};
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      transition: all 0.5s;

      &:hover {
        color: ${(props) => props.theme.hover};
      }
    }
    & p {
      color: ${(props) => props.theme.subtitle};
      transition: all 0.5s;
    }
  }
`;
