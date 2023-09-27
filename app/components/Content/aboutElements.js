import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: hidden;
  overscroll-behavior-inline: contain;
  scroll-behavior: smooth;
  scroll-snap-type: inline mandatory;

  & div {
    position: relative;
    border: 1px solid ${(props) => props.theme.outline};
    height: 60vh;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    margin: 20px;
    scroll-snap-align: start;
    scroll-margin-inline: 30px;

    @media screen and (max-width: 700px) {
      height: 70vh;
      padding: 20px 0px;
      text-align: left;
      margin: 10px;
      border: none;
      justify-content: unset;
      scroll-margin-inline: 0px;
      /* text-size-adjust: initial;
      overflow-y: scroll; */
      /* inline-size: 150px;
      word-wrap: break-word; */
    }

    & h2 {
      align-self: flex-start;
    }
    & p {
      transition: all 1s;
      color: ${(props) => props.theme.subtitle};
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & span {
    font-size: 1.2rem;
    padding: 5px;
    cursor: pointer;
    visibility: hidden;

    &:hover {
      transition: all 0.5s;
      color: ${(props) => props.theme.hover};
    }

    &.show {
      visibility: visible;
    }

    &.moveL {
      animation: moveL 0.8s ease-in-out infinite alternate;
    }

    @keyframes moveL {
      0% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(-3px);
      }
    }

    &.moveR {
      animation: moveR 0.8s ease-in-out infinite alternate;
    }

    @keyframes moveR {
      0% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(3px);
      }
    }
  }
`;
