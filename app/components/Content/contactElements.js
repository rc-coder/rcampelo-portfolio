import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70vw;
  height: 60vh;
  overflow-y: auto;

  h2 {
    font-size: 12vw;
    color: ${(props) => props.theme.title};
    transition: all 0.5s;
  }

  p {
    width: 30vw;
    color: ${(props) => props.theme.subtitle};
    transition: all 0.5s;
  }
  span {
    color: ${(props) => props.theme.subtitle};
    transition: all 0.5s;
  }

  a {
    color: ${(props) => props.theme.title};
    transition: all 0.5s;
    &:hover {
      color: ${(props) => props.theme.hover};
    }
  }
`;
