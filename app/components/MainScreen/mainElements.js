import styled from 'styled-components';

export const MainContainer = styled.div`
  margin: 0;
  height: 100vh;
  padding: 30px;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  transition: all 0.5s;
`;

export const ColorPicker = styled.div`
  position: absolute;
  left: 10px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 15px;
  height: 10%;
  width: 20px;
  & .square {
    height: 10px;
    width: 10px;
    cursor: pointer;
  }

  & .c1 {
    border: 1px solid ${(props) => props.theme.title};
    background: #000000;
  }

  & .c2 {
    border: 1px solid ${(props) => props.theme.title};
    background: #f0f0f0;
  }

  & .c3 {
    border: 1px solid #07c5e3;
    background-color: #fbf804;
  }
`;

export const Outline = styled.div`
  outline: 1px solid ${(props) => props.theme.outline};
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.title};
  transition: all 0.5s;
`;

export const MainContent = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MenuContainer = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  border-left: 1px solid ${(props) => props.theme.outline};
  align-self: flex-end;
  transition: all 0.5s;

  &.resize {
    width: 15%;
  }

  & ul {
    padding-right: 50px;
    transition: all cubic-bezier(1, 0, 0, 1);
    font-size: 4vw;
    line-height: 20vh;

    &.resize {
      font-size: 1vw;
      line-height: 4vh;
      transform: translateY(35vh);
    }

    & li {
      list-style-type: none;
      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        color: ${(props) => props.theme.hover};
      }

      &.selected {
        transform: translateX(-10px);
        list-style-type: circle;
        color: ${(props) => props.theme.selected};
        transition: all 0.5s;
      }
    }

    & li:first-child {
      &.selected {
        display: none;
      }
    }
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 10px;

  & img {
    /* border-radius: 5%; */
    transition: all 0.5s;
    padding: 10px;
    border: 2px solid ${(props) => props.theme.outline};
  }
  & h1 {
    font-weight: 300;
  }

  & p {
    color: ${(props) => props.theme.subtitle};
    transition: all 0.5s;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.outline};
  margin-bottom: 20px;
  transition: all 0.5s;

  & div {
    opacity: 0;
    animation: fadeIn 0.5s linear forwards;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
